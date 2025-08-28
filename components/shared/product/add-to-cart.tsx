"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus, Minus } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
import { toast } from "sonner";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";
import { Cart, CartItem } from "@/types";

const AddToCart = ({ cart, item }: { cart?: Cart; item: CartItem }) => {
  const router = useRouter();
  //   const { toast } = useToast();

  const handleAddToCart = async () => {
    // Execute the addItemToCart action
    const res = await addItemToCart(item);

    // Display appropriate toast message based on the result
    if (!res.success) {
      toast(res.message);
      //   toast({
      //     variant: "destructive",
      //     description: res.message,
      //   });
      return;
    } else {
      toast(`${item.name} added to the cart`);
      router.push("/cart");
    }

    // toast({
    //   description: `${item.name} added to the cart`,
    //   action: (
    //     <ToastAction
    //       className="bg-primary text-white hover:bg-gray-800"
    //       onClick={() => router.push("/cart")}
    //       altText="Go to cart"
    //     >
    //       Go to cart
    //     </ToastAction>
    //   ),
    // });
  };

  // Remove item from cart
  const handleRemoveFromCart = async () => {
    const res = await removeItemFromCart(item.productId);

    // toast({
    //   variant: res.success ? 'default' : 'destructive',
    //   description: res.message,
    // });

    toast(res.message);

    return;
  };

  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);

  return existItem ? (
    <div>
      <Button type="button" variant="outline" onClick={handleRemoveFromCart}>
        <Minus className="w-4 h-4" />
      </Button>
      <span className="px-2">{existItem.qty}</span>
      <Button type="button" variant="outline" onClick={handleAddToCart}>
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  ) : (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <Plus className="w-4 h-4" />
      Add to cart
    </Button>
  );
};
export default AddToCart;
