import { ProductCarousel } from "@/components/shared/product/product-carousel";
import ProductList from "@/components/shared/product/product-list";
import ViewAllProductsButton from "@/components/view-all-products-button";
import {
  getFeaturedProducts,
  getLatestProducts,
} from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts: any = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="space-y-8">
      <h2 className="h2-bold">Latest Products</h2>
      <div>
        {featuredProducts.length > 0 && (
          <ProductCarousel data={featuredProducts} />
        )}

        <ProductList title="Newest Arrivals" data={latestProducts} />
      </div>
      <ProductList title="Newest Arrivals" data={latestProducts} />
      <ViewAllProductsButton />
    </div>
  );
};

export default HomePage;
