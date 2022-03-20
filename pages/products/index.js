import MyImage from "../../components/productDetailImage";
import Link from "next/link";
import Layout from "../../components/layout";
import { fetchAPI } from "../../lib/api";

export async function getStaticProps() {
  const data = await fetchAPI("/products", {
    populate: ["Gallery", "Options"],
  });

  return {
    props: {
      product: data,
    },
  };
}

export default function Products(props) {
  const { product } = props;
  console.log(product);

  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto pt-16 mt-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 id="products-heading" className="sr-only">
            Összes Termék
          </h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {product.data.map((item) => (
              <Link
                key={item.attributes.slug}
                href={{
                  pathname: "/products/[slug]",
                  query: {
                    slug: item.attributes.slug,
                  },
                }}
              >
                <a className="hover:opacity-75">
                  <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                    <MyImage
                      image={item.attributes.Gallery.data[0].attributes}
                      layoutOpt="responsive"
                      iwidth="65%"
                      iheight="80%"
                      fit="cover"
                      style="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                    <h3>{item.attributes.name}</h3>
                    <p>{item.attributes.Options[0].price} Ft</p>
                  </div>
                  <p className="mt-1 text-sm italic text-gray-500">
                    {item.description}
                  </p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
