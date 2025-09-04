"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { useToast } from "@/hooks/use-toast";
// import { createProduct, updateProduct } from "@/lib/actions/product.actions";
import { productDefaultValues } from "@/lib/constants";
import { insertProductSchema, updateProductSchema } from "@/lib/validator";
import { ControllerRenderProps } from "react-hook-form";
import { Product } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import slugify from "slugify";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";
// import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";

const ProductForm = ({
  type,
  product,
  productId,
}: {
  type: "Create" | "Update";
  product?: Product;
  productId?: string;
}) => {
  const router = useRouter();
  // const { toast } = useToast();

  const form = useForm<z.infer<typeof insertProductSchema>>({
    resolver:
      type === "Update"
        ? zodResolver(updateProductSchema)
        : zodResolver(insertProductSchema),
    defaultValues:
      product && type === "Update" ? product : productDefaultValues,
  });

  <>
    asd
    <Form {...form}>
      <form className="space-y-8">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col gap-5 md:flex-row">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof insertProductSchema>,
                  "name"
                >;
              }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Slug */}
            <FormField
              control={form.control}
              name="slug"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof insertProductSchema>,
                  "slug"
                >;
              }) => (
                <FormItem className="w-full">
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Enter product slug"
                        className="pl-8"
                        {...field}
                      />
                      {/* Generate Button */}
                      <button
                        type="button"
                        className="bg-gray-500 text-white px-4 py-1 mt-2 hover:bg-gray-600"
                        onClick={() => {
                          form.setValue(
                            "slug",
                            slugify(form.getValues("name"), { lower: true })
                          );
                        }}
                      >
                        Generate
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col gap-5 md:flex-row">
            {/* Category */}
            <FormField
              control={form.control}
              name="category"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof insertProductSchema>,
                  "category"
                >;
              }) => (
                <FormItem className="w-full">
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter category" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Brand */}
            <FormField
              control={form.control}
              name="brand"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof insertProductSchema>,
                  "brand"
                >;
              }) => (
                <FormItem className="w-full">
                  <FormLabel>Brand</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product brand" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col gap-5 md:flex-row">
            {/* Price */}
            <FormField
              control={form.control}
              name="price"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof insertProductSchema>,
                  "price"
                >;
              }) => (
                <FormItem className="w-full">
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product price" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Stock */}
            <FormField
              control={form.control}
              name="stock"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof insertProductSchema>,
                  "stock"
                >;
              }) => (
                <FormItem className="w-full">
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter product stock"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="upload-field flex flex-col gap-5 md:flex-row">
          {/* Images */}
        </div>
        <div className="upload-field">{/* Is Featured */}</div>
        <div>
          <div>
            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof insertProductSchema>,
                  "description"
                >;
              }) => (
                <FormItem className="w-full">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter product description"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div>{/* Submit */}</div>
      </form>
    </Form>
  </>;
};

export default ProductForm;
