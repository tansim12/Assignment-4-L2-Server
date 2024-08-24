import { z } from "zod";
import { Types } from "mongoose";

// Zod validation for TUserInfo
const userInfoSchema = z.object({
  email: z.string().email(),
  cardHolder: z.string().min(1, "Card holder name is required"),
  billingAddress: z.string().min(1, "Billing address is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(1, "ZIP code is required"),
  userId: z.instanceof(Types.ObjectId).optional(),
});

// Zod validation for TBuyingProduct
const buyingProductSchema = z.object({
  _id: z.string().min(1, "Product ID is required"),
  buyQuantity: z.number().min(1, "Buy quantity must be at least 1"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
});

// Zod validation for TCheckoutData
export const checkoutZodSchema = z.object({
  body: z.object({
    userInfo: userInfoSchema,
    buyingProduct: z
      .array(buyingProductSchema)
      .min(1, "At least one product is required"),
    totalPrice: z.number().min(0, "Total price must be a positive number"),
  }),
});

export const CheckOutZodValidation = {
  checkoutZodSchema,
};
