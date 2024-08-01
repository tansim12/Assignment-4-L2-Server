import express from "express";
import validationMiddleWare from "../../middleware/ZodSchemaValidationMiddleware";
import { productZodValidation } from "./Product.zodValidation";
import { productController } from "./Product.controller";
const router = express.Router();

router.post(
  "/add-products",
  validationMiddleWare(productZodValidation.ProductSchemaZod),
  productController.addProducts
);

export const productRoute = router