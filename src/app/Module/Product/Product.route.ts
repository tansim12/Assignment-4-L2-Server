import express from "express";
import validationMiddleWare from "../../middleware/ZodSchemaValidationMiddleware";
import { productZodValidation } from "./Product.zodValidation";
import { productController } from "./Product.controller";
const router = express.Router();

router.post(
  "/",
  validationMiddleWare(productZodValidation.ProductSchemaZod),
  productController.addProducts
);
router.put(
  "/update-product/:id",
  validationMiddleWare(productZodValidation.UpdateProductSchemaZod),
  productController.updateProduct
);
router.delete("/delete-product/:id", productController.deleteProducts);
router.get("/", productController.findAllProducts);
router.get("/:id", productController.findOneProduct);

export const productRoute = router;
