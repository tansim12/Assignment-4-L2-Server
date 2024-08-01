import { RequestHandler } from "express";
import { productService } from "./Product.service";
import { successResponse } from "../../Re-Useable/CustomResponse";

const addProducts: RequestHandler = async (req, res, next) => {
  try {
    const result = await productService.addProductsDB(req?.body);
    res.send(successResponse(result, 200, "Product Create Successfully Done"));
  } catch (error) {
    next(error);
  }
};
// delete one 
const deleteProducts: RequestHandler = async (req, res, next) => {
  try {
    const result = await productService.deleteProductsDB(req?.params?.id);
    res.send(successResponse(result, 200, "Product Delete Successfully Done"));
  } catch (error) {
    next(error);
  }
};

// update one 
const updateProduct: RequestHandler = async (req, res, next) => {
  try {
    const result = await productService.updateProductDB(
      req?.params?.id,
      req.body
    );
    res.send(successResponse(result, 200, "Product Update Successfully Done"));
  } catch (error) {
    next(error);
  }
};
// find one  
const findOneProduct: RequestHandler = async (req, res, next) => {
  try {
    const result = await productService.findOneProductsDB(req?.params?.id);
    res.send(successResponse(result, 200, "Product Find Successfully Done"));
  } catch (error) {
    next(error);
  }
};


// find all 
const findAllProducts: RequestHandler = async (req, res, next) => {
  try {
    const result = await productService.findAllProductsDB(req?.query);
    res.send(successResponse(result, 200, "Product Find Successfully Done"));
  } catch (error) {
    next(error);
  }
};

export const productController = {
  addProducts,
  deleteProducts,
  updateProduct,
  findAllProducts,
  findOneProduct,
};
