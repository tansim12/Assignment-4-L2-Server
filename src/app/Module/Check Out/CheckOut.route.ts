import express from "express";
import validationMiddleWare from "../../middleware/ZodSchemaValidationMiddleware";
import { CheckOutZodValidation } from "./CheckOut.zodValidaton";
import { CheckOutController } from "./CheckOut.controller";
const router = express.Router();

router.post(
  "/",
  validationMiddleWare(CheckOutZodValidation.checkoutZodSchema),
//   validationMiddleWare(CheckOutZodValidation.checkoutZodSchema),
  CheckOutController.postCheckOutData
);
export const checkOutRoute = router;
