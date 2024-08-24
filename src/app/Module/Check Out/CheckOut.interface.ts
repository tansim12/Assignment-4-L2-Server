import { Types } from "mongoose";

export interface TUserInfo {
  email: string;
  cardHolder: string;
  billingAddress: string;
  state: string;
  zip: string;
  userId?: Types.ObjectId;
}

export interface TBuyingProduct {
  _id: string;
  buyQuantity: number;
  quantity: number;
}

export interface TCheckoutData {
  userInfo: TUserInfo;
  buyingProduct: TBuyingProduct[];
  totalPrice: number;
}
