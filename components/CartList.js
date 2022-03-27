import CartItem from "./CartItem";

const CartList = ({ products }) => {
  return (
    <section aria-labelledby="cart-heading" className="lg:col-span-7">
      <h2 id="cart-heading" className="sr-only">
        Items in your shopping cart
      </h2>

      <ul
        role="list"
        className="border-t border-b border-gray-200 divide-y divide-gray-200"
      >
        {products.map((product, productIdx) => (
          <CartItem product={product} productIdx={productIdx} />
        ))}
      </ul>
    </section>
  );
};

export default CartList;
