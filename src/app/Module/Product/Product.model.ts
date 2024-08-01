import mongoose, { Schema, Types } from "mongoose";
import { TProduct } from "./Product.interface";

const productSchema = new Schema<TProduct>(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: [String], required: true },
    ShortDescription: { type: String, required: true },
    description: { type: [String], required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    rating: { type: Number, required: true },
    availability: {
      type: String,
      enum: ["inStock", "pre-order", "upcoming"],
      required: true,
    },
    brand: { type: String, required: true },
    type: { type: String, required: true },
    color: { type: [String], required: true },
    materials: { type: String, required: true },
    quantity: { type: Number, required: true , min:1, max:10 },
    isDelete: { type: Boolean, required: true, default: false },
    specification: { type: String, required: true },
    shoppingInfo: { type: String, required: true },
    sellerProfile: { type: Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = mongoose.model<TProduct>("Product", productSchema);
