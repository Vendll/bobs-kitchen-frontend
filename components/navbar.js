import Image from "next/image";
import products from "../pages/api/products/products.json";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import logoPic from "../public/BK.svg";

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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white fixed top-0 z-30 w-full">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400 focus:outline-none focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-opacity-0"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {products.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "text-bobred border-bobred"
                              : "text-bobgray border-transparent",
                            "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {products.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className="pt-10 pb-8 px-4 space-y-10"
                    >
                      {category.items.map((item) => (
                        <div key={item.name} className="space-y-10">
                          <li key={item.name} className="flow-root">
                            <Link
                              href={item.href}
                              className="-m-2 p-2 block text-gray-500"
                            >
                              {item.name}
                            </Link>
                          </li>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {products.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <a
                      href={page.href}
                      className="-m-2 p-2 block font-medium text-gray-900"
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* desktop menu */}
      <header className="relative bg-white border-b border-gray-200 ">
        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="">
            <div className="h-24 flex items-center justify-between">
              <div className="flex-1 flex items-center lg:hidden">
                <button
                  type="button"
                  className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <Popover.Group className="flex lg:hidden">
                  <Popover key="searchbar" className="flex">
                    {({ open }) => (
                      <>
                        <div className="relative flex">
                          <Popover.Button
                            className={classNames(
                              open ? "text-bobred " : "text-gray-400",
                              "p-2 focus:outline-none focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-opacity-0 hover:text-bobgray lg:block"
                            )}
                          >
                            <span className="sr-only">Search</span>
                            <SearchIcon
                              className="w-6 h-6"
                              aria-hidden="true"
                            />
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="absolute top-full border-t border-gray-200 z-20 inset-x-0">
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}

                            <div className="relative bg-white">
                              <div className=" mx-auto ">
                                <div className="px-4 py-4 text-sm text-bobblue">
                                  <input
                                    type="text"
                                    name="search"
                                    id="search"
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-bobred border-bobred focus:border-bobred border-gray-300 rounded-md"
                                    placeholder="Search here"
                                  ></input>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </Popover.Group>

                {/* <button className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <SearchIcon className="w-6 h-6" aria-hidden="true" />
                </button> */}
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:flex-1 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {products.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "text-bobred focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                                  : "text-bobgray hover:text-bobblue",
                                "relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium hover:border-b-2 hover:border-bobred focus:outline-none focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-opacity-0"
                              )}
                            >
                              {category.name}
                              <span
                                className={classNames(
                                  open ? "bg-bobred" : "",
                                  "absolute bottom-0 inset-x-0 h-0.5 transition-colors ease-out duration-200 sm:mt-5 sm:transform sm:translate-y-px"
                                )}
                                aria-hidden="true"
                              />
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full border-t border-gray-200 z-20 inset-x-0">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="max-w-7xl mx-auto px-8">
                                  <div className="grid grid-rows-6 gap-y-5 gap-x-4 py-16 text-sm text-bobblue">
                                    {category.items.map((item) => (
                                      <div key={item.name} className="">
                                        <Link href={item.href}>
                                          <a className="hover:text-bobred">
                                            {item.name}
                                          </a>
                                        </Link>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {products.pages.map((page) => (
                    <Link key={page.name} href={page.href}>
                      <a className="flex items-center text-sm font-medium text-bobgray hover:text-bobblue hover:border-b-2 hover:border-bobred">
                        {page.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              {/* Logo */}
              <Link href="/">
                <a className="flex">
                  <span className="sr-only">Workflow</span>
                  <Image
                    src={logoPic}
                    layout="fixed"
                    height={100}
                    width={50}
                    alt=""
                  />
                </a>
              </Link>

              <div className="flex-1 flex items-center justify-end">
                {/* Search */}
                <Popover.Group className="hidden lg:flex ">
                  <div className="h-full flex space-x-8">
                    <Popover key="searchbar" className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open ? "text-bobred " : "text-gray-400",
                                "hidden ml-6 p-2 focus:outline-none focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-opacity-0 hover:text-bobgray lg:block"
                              )}
                            >
                              <span className="sr-only">Search</span>
                              <SearchIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full border-t border-gray-200 z-20 inset-x-0">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}

                              <div className="relative bg-white">
                                <div className=" mx-auto px-8">
                                  <div className="px-4 py-4 text-sm text-bobblue">
                                    <input
                                      type="text"
                                      name="search"
                                      id="search"
                                      className="py-3 px-4 block w-full shadow-sm focus:ring-bobred border-bobred focus:border-bobred border-gray-300 rounded-md"
                                      placeholder="Search here"
                                    ></input>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </div>
                </Popover.Group>

                {/* Account */}
                <Link href="/login">
                  <a className="p-2 text-gray-400 hover:text-bobgray lg:ml-4">
                    <span className="sr-only">Account</span>
                    <UserIcon className="w-6 h-6" aria-hidden="true" />
                  </a>
                </Link>

                {/* Cart */}
                <div className="lg:ml-4">
                  <Popover className=" flow-root text-sm lg:relative ">
                    <Popover.Button className="group -m-2 p-2 flex items-center focus:outline-none focus-visible:ring-0 focus-visible:ring-white focus-visible:ring-opacity-0">
                      <ShoppingBagIcon
                        className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-bobgray"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-bobgray">
                        0
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Popover.Panel className="absolute top-24 inset-x-0 pb-6 bg-gray-50 shadow-lg sm:px-2 md:top-full md:left-auto md:right-0 lg:mt-3 md:-mr-1.5 md:w-80 md:rounded-lg md:ring-2 md:ring-opacity-10 md:ring-bobgray">
                        <h2 className="sr-only">Shopping Cart</h2>

                        <form className="max-w-2xl mx-auto px-4">
                          <div className="flex justify-center items-center text-gray-400 text-base py-10">
                            <h1>Nincs termék</h1>
                          </div>
                          {/*                           <ul role="list" className="divide-y divide-gray-200">
                            {products.map((product) => (
                              <li
                                key={product.id}
                                className="py-6 flex items-center"
                              >
                                <img
                                  src={product.imageSrc}
                                  alt={product.imageAlt}
                                  className="flex-none w-16 h-16 rounded-md border border-gray-200"
                                />
                                <div className="ml-4 flex-auto">
                                  <h3 className="font-medium text-gray-900">
                                    <a href={product.href}>{product.name}</a>
                                  </h3>
                                  <p className="text-gray-500">
                                    {product.color}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul> */}
                          <button
                            type="submit"
                            className="w-full bg-bobred border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-bobblue focus:outline-none focus:ring-0 focus:ring-offset-0"
                          >
                            Checkout
                          </button>
                          <p className="mt-6 text-center">
                            <Link href="/cart">
                              <a className="text-sm font-medium text-bobblue hover:text-bobred">
                                View Shopping Bag
                              </a>
                            </Link>
                          </p>
                        </form>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
