import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

export const dynamic = "force-dynamic";

const HomePage = async () => {
  const latestProducts: any = await getLatestProducts();

  return (
    <div className="space-y-8">
      <h2 className="h2-bold">Latest Products</h2>
      <ProductList title="Newest Arrivals" data={latestProducts} />
    </div>
  );
};

export default HomePage;
