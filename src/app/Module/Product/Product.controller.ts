import { RequestHandler } from "express";
import { productService } from "./Product.service";
import { successResponse } from "../../Re-Useable/CustomResponse";

const addProducts: RequestHandler = async (req, res, next) => {
  try {
    const result = await productService.addProductsDB(req?.body);
    res.send(successResponse(result, 200, "Product Create Successfully done"));
  } catch (error) {
    next(error);
  }
};

export const productController = {
  addProducts,
};
