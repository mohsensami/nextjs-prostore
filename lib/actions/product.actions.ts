"use server";
import { PrismaClient } from "../../lib/generated/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// Get the latest products
export async function getLatestProducts() {
  const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  // Convert Decimal values to numbers
  const convertedData = data.map(product => ({
    ...product,
    price: Number(product.price),
    rating: Number(product.rating),
  }));

  return convertToPlainObject(convertedData);
}
