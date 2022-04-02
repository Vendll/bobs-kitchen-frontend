import CartList from "../components/CartList";
import OrderSummary from "../components/OrderSummery";

export default function ShoppingCart() {
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      price: "$32.00",
      color: "Sienna",
      inStock: true,
      size: "Large",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in sienna.",
    },
    {
      id: 2,
      name: "Basic Tee",
      href: "#",
      price: "$32.00",
      color: "Black",
      inStock: false,
      leadTime: "3-4 weeks",
      size: "Large",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 3,
      name: "Nomad Tumbler",
      href: "#",
      price: "$35.00",
      color: "White",
      inStock: true,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",
      imageAlt: "Insulated bottle with white base and black snap lid.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-24 pt-16 pb-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Shopping Cart
      </h1>

      <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
        <CartList products={products} />

        {/* Order summary */}
        <OrderSummary />
      </form>
    </div>
  );
}
