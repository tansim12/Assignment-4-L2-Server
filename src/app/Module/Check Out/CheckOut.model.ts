import { model, Schema } from "mongoose";
import { TBuyingProduct, TCheckoutData, TUserInfo } from "./CheckOut.interface";

// Create a schema for TUserInfo
const userInfoSchema = new Schema<TUserInfo>({
  email: { type: String, required: true },
  cardHolder: { type: String, required: true },
  billingAddress: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, }, // assuming there is a User model
});

// Create a schema for TBuyingProduct
const buyingProductSchema = new Schema<TBuyingProduct>({
  _id: { type: String, required: true },
  buyQuantity: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// Create a schema for TCheckoutData
const checkoutDataSchema = new Schema<TCheckoutData>({
  userInfo: { type: userInfoSchema, required: true },
  buyingProduct: { type: [buyingProductSchema], required: true },
  totalPrice: { type: Number, required: true },
});

// Create a model for TCheckoutData
export const CheckOutModel = model<TCheckoutData>(
  "Checkout",
  checkoutDataSchema
);
