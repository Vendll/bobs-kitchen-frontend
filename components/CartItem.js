import {
  CheckIcon,
  ClockIcon,
  XIcon as XIconSolid,
} from "@heroicons/react/solid";
import Image from "next/image";

const CartItem = ({ product, productIdx }) => {
  return (
    <li key={product.id} className="flex py-6 sm:py-10">
      <div className="flex-shrink-0 relative h-24 sm:h-48 rounded-md">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <h3 className="text-sm">
                <a
                  href={product.href}
                  className="font-medium text-bobred hover:text-gray-800"
                >
                  {product.name}
                </a>
              </h3>
            </div>
            <div className="mt-1 flex text-sm">
              <p className="text-bobblue/90">{product.color}</p>
              {product.size ? (
                <p className="ml-4 pl-4 border-l border-gray-200 text-bobgray/70">
                  {product.size}
                </p>
              ) : null}
            </div>
            <p className="mt-1 text-sm font-medium text-bobgray">
              {product.price}
            </p>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9">
            <label htmlFor={`quantity-${productIdx}`} className="sr-only">
              Quantity, {product.name}
            </label>
            <select
              id={`quantity-${productIdx}`}
              name={`quantity-${productIdx}`}
              className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-bobred focus:border-bobred sm:text-sm"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
            </select>

            <div className="absolute top-0 right-0">
              <button
                type="button"
                className="-m-2 p-2 inline-flex text-bobblue hover:text-bobred"
              >
                <span className="sr-only">Remove</span>
                <XIconSolid className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <p className="mt-4 flex text-sm text-gray-700 space-x-2">
          {product.inStock ? (
            <CheckIcon
              className="flex-shrink-0 h-5 w-5 text-green-700"
              aria-hidden="true"
            />
          ) : (
            <ClockIcon
              className="flex-shrink-0 h-5 w-5 text-stone-400"
              aria-hidden="true"
            />
          )}

          <span>
            {product.inStock ? "In stock" : `Ships in ${product.leadTime}`}
          </span>
        </p>
      </div>
    </li>
  );
};

export default CartItem;
