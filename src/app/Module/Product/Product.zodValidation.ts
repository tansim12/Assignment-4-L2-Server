import { z } from "zod";

const ProductSchemaZod = z.object({
  body: z.object({
    name: z.string().nonempty("Name is required"),
    title: z.string().nonempty("Title is required"),
    category: z.string().nonempty("Category is required"),
    image: z
      .array(z.string().url("Invalid image URL"))
      .nonempty("Image is required"),
    ShortDescription: z.string().nonempty("Short Description is required"),
    description: z
      .array(z.string().nonempty("Description is required"))
      .nonempty("Description is required"),
    price: z.number().min(0, "Price must be a positive number"),
    discount: z.number().min(0, "Discount must be a positive number"),
    rating: z.number().min(0).max(5, "Rating must be between 0 and 5"),
    availability: z.enum(["inStock", "pre-order", "upcoming"], {
      errorMap: () => ({ message: "Invalid availability status" }),
    }),
    brand: z.string().nonempty("Brand is required"),
    type: z.string().nonempty("Type is required"),
    color: z
      .array(z.string().nonempty("Color is required"))
      .nonempty("Color is required"),
    materials: z.string().nonempty("Materials is required"),
    quantity: z
      .number()
      .int()
      .min(1)
      .max(100, "Quantity must be between 1 and 10"),
    order: z.number().optional(),
    isDelete: z.boolean().default(false),
    specification: z.string().nonempty("Specification is required"),
    shoppingInfo: z.string().nonempty("Shopping Info is required"),
    sellerProfile: z.string().nonempty("Seller Profile is required"),
  }),
});
const UpdateProductSchemaZod = z.object({
  body: z.object({
    name: z.string().nonempty("Name is required").optional(),
    title: z.string().nonempty("Title is required").optional(),
    category: z.string().nonempty("Category is required").optional(),
    image: z
      .array(z.string().url("Invalid image URL"))
      .nonempty("Image is required")
      .optional(),
    ShortDescription: z
      .string()
      .nonempty("Short Description is required")
      .optional(),
    description: z
      .array(z.string().nonempty("Description is required"))
      .nonempty("Description is required")
      .optional(),
    price: z.number().min(0, "Price must be a positive number").optional(),
    discount: z
      .number()
      .min(0, "Discount must be a positive number")
      .optional(),
    rating: z
      .number()
      .min(0)
      .max(5, "Rating must be between 0 and 5")
      .optional(),
    availability: z
      .enum(["inStock", "pre-order", "upcoming"], {
        errorMap: () => ({ message: "Invalid availability status" }),
      })
      .optional(),
    brand: z.string().nonempty("Brand is required").optional(),
    type: z.string().nonempty("Type is required").optional(),
    color: z
      .array(z.string().nonempty("Color is required"))
      .nonempty("Color is required"),
    materials: z.string().nonempty("Materials is required").optional(),
    quantity: z
      .number()
      .int()
      .min(1)
      .max(100, "Quantity must be between 1 and 10")
      .optional(),
    order: z.number().optional(),
    isDelete: z.boolean().default(false).optional(),
    specification: z.string().nonempty("Specification is required").optional(),
    shoppingInfo: z.string().nonempty("Shopping Info is required").optional(),
    sellerProfile: z.string().nonempty("Seller Profile is required").optional(),
  }),
});

export const productZodValidation = {
  ProductSchemaZod,
  UpdateProductSchemaZod,
};
