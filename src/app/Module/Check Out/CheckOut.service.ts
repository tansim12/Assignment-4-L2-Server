import { Types } from "mongoose";
import { ProductModel } from "../Product/Product.model";
import { TCheckoutData } from "./CheckOut.interface";
import { availableProduct } from "../Product/Product.const";

const postCheckOutDataDB = async (body: TCheckoutData) => {
  const { buyingProduct, totalPrice, userInfo } = body;
  const productIds = buyingProduct?.map(
    (product) => new Types.ObjectId(product._id)
  );

  const foundProducts = await ProductModel.find({
    _id: { $in: productIds },
    isDelete: false,
    availability: availableProduct.INSTOCK,
  });

  // Map over the buyingProduct to update the found products
  const updates = buyingProduct.map((product) => ({
    updateOne: {
      filter: { _id: new Types.ObjectId(product._id) },
      update: {
        $inc: { quantity: -product.buyQuantity, order: product?.buyQuantity }, // Decrease quantity by buyQuantity
      },
    },
  }));

  // Perform bulk update
  const result = await ProductModel.bulkWrite(updates);
  return result;
};

export const CheckOutService = {
  postCheckOutDataDB,
};
