import httpStatus from "http-status";
import AppError from "../../Error-Handle/AppError";
import { TProduct } from "./Product.interface";
import { ProductModel } from "./Product.model";
import QueryBuilder from "../../Builder/QueryBuilder";
import { productsSearchAbleFields } from "./Product.const";

const addProductsDB = async (body: TProduct) => {
  const result = await ProductModel.create(body);
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, "Product Created Failed !");
  }
  return result;
};

// delete
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

// update
const updateProductDB = async (id: string, body: Partial<TProduct>) => {
  const product = await ProductModel.findById(id).select("isDelete");
  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, "This product not found !");
  }
  const result = await ProductModel.findByIdAndUpdate(
    id,
    { $set: { ...body } },
    { upsert: true, new: true }
  );
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, "Product Update Failed !");
  }
  return result;
};

// find one
const findOneProductsDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  if (!result || result?.isDelete) {
    throw new AppError(httpStatus.NOT_FOUND, "Product are not found !");
  }

  return result;
};

// find all
const findAllProductsDB = async (query: Record<string, unknown>) => {
  
  const productQuery = new QueryBuilder(
    ProductModel.find({ isDelete: false }),
    query
  )
    .search(productsSearchAbleFields)
    .sort()
    .filter()
    .paginate();

  const result = await productQuery.modelQuery;
  if (!result.length) {
    throw new AppError(httpStatus.NOT_FOUND, "Product are not found !");
  }

  return result;
};

export const productService = {
  addProductsDB,
  deleteProductsDB,
  updateProductDB,
  findAllProductsDB,
  findOneProductsDB,
};
