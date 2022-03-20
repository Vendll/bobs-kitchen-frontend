import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import products from "../api/products/products.json";

export default function Products() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto pt-16 mt-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 id="products-heading" className="sr-only">
            Összes Termék
          </h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {products.categories.map((item) => (
              <a key={item.name} href={item.href}>
                <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                  <Image
                    src={item.images}
                    alt={item.imageAlt}
                    layout="responsive"
                    width="65%"
                    height="80%"
                    objectFit="cover"
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
                <p className="mt-1 text-sm italic text-gray-500">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
