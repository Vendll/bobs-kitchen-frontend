import Link from "next/link";
import MyImage from "./ProductDetailImage";

const ProductCard = ({item}) => {
  return (
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
          {item.attributes.slug}
        </p>
      </a>
    </Link>
  );
};

export default ProductCard;
