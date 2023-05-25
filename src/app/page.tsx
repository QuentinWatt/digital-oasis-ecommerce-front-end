import ProductCard from "@/components/product-cards/ProductCard";

const Home = () => {
  return (
    <div className="container mx-auto">
      <header>
        <h1 className="mb-5 text-3xl">Specials</h1>
      </header>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Home;
