import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pt-16 mt-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" className="sr-only">
          Összes Termék
        </h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {product.data.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
