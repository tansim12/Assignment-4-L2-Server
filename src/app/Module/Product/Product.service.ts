import httpStatus from "http-status"
import AppError from "../../Error-Handle/AppError"
import { TProduct } from "./Product.interface"
import { ProductModel } from "./Product.model"

const addProductsDB = async(body:TProduct)=>{
const result = await ProductModel.create(body)
if (!result) {
    throw new  AppError(httpStatus.BAD_REQUEST,"Product Created Failed !")
}
return result


}

export const productService ={
    addProductsDB
}