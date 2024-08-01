import httpStatus from "http-status";
import AppError from "../../Error-Handle/AppError";
import { TProduct } from "./Product.interface";
import { ProductModel } from "./Product.model";

const addProductsDB = async (body: TProduct) => {
  const result = await ProductModel.create(body);
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, "Product Created Failed !");
  }
  return result;
};

const deleteProductsDB = async (id: string) => {
  const product = await ProductModel.findById(id).select("isDelete");
  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, "This product not found !");
  }
  const result = await ProductModel.findByIdAndUpdate(
    id,
    { isDelete: true },
    { upsert: true }
  );
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, "Product delete failed !");
  }
  return result;
};

const updateProductDB = async (id: string, queryObj: Partial<TProduct>) => {
  const product = await ProductModel.findById(id).select("isDelete");
  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, "This product not found !");
  }
  const result = await ProductModel.findByIdAndUpdate(
    id,
    { $set: { ...queryObj } },
    { upsert: true, new: true }
  );
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, "Product Update Failed !");
  }
  return result
};

const findAllProductsDB = async()=>{
  const result = await ProductModel.find()
  if (!result.length) {
    throw new AppError(httpStatus.NOT_FOUND, "Product are not found !");
  }

  return result
}
export const productService = {
  addProductsDB,
  deleteProductsDB,
  updateProductDB,findAllProductsDB
};
