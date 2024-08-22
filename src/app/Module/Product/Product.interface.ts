import { Schema } from "mongoose";

export type TCategory =
  | "Tents & Shelters"
  | "Sleeping Gear"
  | "Camp Furniture"
  | "Cooking Equipment"
  | "Backpacks & Bags"
  | "Lighting & Lanterns"
  | "First Aid & Survival"
  | "Clothing & Apparel"
  | "Footwear"
  | "Navigation & Tech";
export type TProductTypes = "Featured" | "New Arrival";
// export type TAvailability = "inStock" | "pre-order" | "upcoming";


export interface TProduct {
  name: string;
  category: TCategory;
  title: string;
  image: string[];
  shortDescription: string;
  description: string[];
  price: number;
  discount: number;
  rating: number;
  availability: "inStock" | "pre-order" | "upcoming";
  brand: string;
  type: TProductTypes;
  color: string[];
  materials: string;
  quantity: number;
  order?: number;
  isDelete: boolean;
  specification: string;
  shoppingInfo: string;
  sellerProfile: Schema.Types.ObjectId;
}
