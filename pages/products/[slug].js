import axios from "axios";

import ImageTabGroup from "../../components/ProductImageTabGroup";

import { useState } from "react";
import { Disclosure, RadioGroup } from "@headlessui/react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";

async function getData(pageSlug) {
  const apiURL =
    "https://bobskitchenbackend-ojs88.ondigitalocean.app/api/slugify/slugs/product/";
  const { data } = await axios.get(apiURL + pageSlug, {
    params: {
      populate: "*",
    },
  });

  return data;
}

async function getNutritionData(id) {
  const apiURL =
    "https://bobskitchenbackend-ojs88.ondigitalocean.app/api/slugify/slugs/product/";
}

async function getAllData() {
  const apiURL =
    "https://bobskitchenbackend-ojs88.ondigitalocean.app/api/products/";
  const res = await fetch(apiURL);
  const data = await res.json();

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const pageSlug = params.slug;
  const data = await getData(pageSlug);

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const daaata = await getAllData();
  const slugs = daaata.data.map((product) => product.attributes.slug);
  const pathWithParams = slugs.map((slug) => ({ params: { slug: slug } }));

  return {
    paths: pathWithParams,
    fallback: false,
  };
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail(props) {
  const { product } = props;
  const [selectedProduct, setselectedProduct] = useState(
    product.data.attributes.Options[0]
  );

  if (!product) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="bg-white mt-16">
      <div className="max-w-2xl mx-auto pt-16 px-4 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <ImageTabGroup product={product} />

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {product.data.attributes.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">{selectedProduct.price}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="text-base text-gray-700 space-y-6" />
              {product.data.attributes.Description}
            </div>

            <form className="mt-6">
              {/* Size picker */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-900">Size</h2>
                </div>

                <RadioGroup
                  value={selectedProduct}
                  onChange={setselectedProduct}
                  className="mt-2"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a size
                  </RadioGroup.Label>
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    {product.data.attributes.Options.map((size) => (
                      <RadioGroup.Option
                        key={size.id}
                        value={size}
                        className={({ active, checked }) =>
                          classNames(
                            size.inStock
                              ? "cursor-pointer focus:outline-none"
                              : "opacity-25 cursor-not-allowed",
                            active ? "ring-2 ring-offset-2 ring-bobred" : "",
                            checked
                              ? "bg-bobred border-transparent text-white "
                              : "bg-white border-gray-200 text-gray-900 hover:bg-bobblue hover:text-white",
                            "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
                          )
                        }
                        disabled={!size.inStock}
                      >
                        <RadioGroup.Label as="p">
                          {size.value} {size.unitOfMeasure}
                        </RadioGroup.Label>
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-10 flex sm:flex-col1">
                <button
                  type="submit"
                  className="mt-8 w-full bg-bobred border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-bobblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add to cart
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>
              <div className="border-t divide-y divide-gray-200">
                <Disclosure as="div" key={product.data.id}>
                  {({ open }) => (
                    <>
                      <h3>
                        <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                          <span
                            className={classNames(
                              open ? "text-bobred" : "text-gray-900",
                              "text-sm font-medium"
                            )}
                          >
                            {product.data.attributes.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusSmIcon
                                className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmIcon
                                className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel
                        as="div"
                        className="pb-6 prose prose-sm"
                      >
                        <ul role="list">
                          <li key={product.data.attributes.slug}>
                            {product.data.attributes.Description}
                          </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
