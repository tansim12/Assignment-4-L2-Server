import { startSession, Types } from "mongoose";
import { ProductModel } from "../Product/Product.model";
import { TCheckoutData } from "./CheckOut.interface";
import { availableProduct } from "../Product/Product.const";
import AppError from "../../Error-Handle/AppError";

const postCheckOutDataDB = async (body: TCheckoutData) => {
  const { buyingProduct } = body;
  const session = await startSession();
  try {
    session.startTransaction();
    // Check if buyingProduct is not empty
    if (!buyingProduct || buyingProduct.length === 0) {
      throw new AppError(400, "No products to update.");
    }

    const productIds = buyingProduct.map(
      (product) => new Types.ObjectId(product._id)
    );

    const foundProducts = await ProductModel.find({
      _id: { $in: productIds },
      isDelete: false,
      availability: availableProduct.INSTOCK,
    })
      .select("availability isDelete")
      .session(session);

    // If any product is not found, or doesn't meet the criteria, throw an error
    if (foundProducts.length !== buyingProduct.length) {
      throw new AppError(
        400,
        "One or more products are either deleted or not in stock."
      );
    }

    // Map over the buyingProduct to update the found products
    const updates = buyingProduct.map((product) => ({
      updateOne: {
        filter: {
          _id: new Types.ObjectId(product._id),
        },
        update: {
          $inc: { quantity: -product.buyQuantity, order: product?.buyQuantity }, // Decrease quantity by buyQuantity
        },
      },
    }));

    // Perform bulk update
    const result = await ProductModel.bulkWrite(updates, { session: session });
    await ProductModel.updateMany(
      { _id: { $in: productIds }, quantity: { $lte: 0 } },
      { $set: { availability: availableProduct.STOCKOUT } },
      { session: session }
    );
    if (!result) {
      throw new AppError(400, "CheckOut Something Went Wrong😢");
    }
    await session.commitTransaction();
    await session.endSession();
    return result;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(400, "CheckOut Failed 😢");
  }
};

export const CheckOutService = {
  postCheckOutDataDB,
};
