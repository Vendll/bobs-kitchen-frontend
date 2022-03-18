import Layout from '../../components/layout'
import Image from 'next/image'

import { useState } from 'react'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'
import { CurrencyDollarIcon, GlobeIcon } from '@heroicons/react/outline'


const product = {
    name: 'Zip Tote Basket',
    price: '$140',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Angled view',
        src: '/image1/image00002.jpeg',
        alt: 'Angled front view with bag zipped and handles upright.',
      },
      {
        id: 1,
        name: 'Angled view',
        src: '/image1/image00004.jpeg',
        alt: 'Angled front view with bag zipped and handles upright.',
      },
      {
        id: 1,
        name: 'Angled view',
        src: '/image1/image00003.jpeg',
        alt: 'Angled front view with bag zipped and handles upright.',
      },
      // More images...
    ],
    sizes: [
        { name: 'XXS', inStock: true },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: false },
      ],
    description: `
      <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
    `,
    details: [
      {
        name: 'Features',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ],
      },
      {
        name: 'ASdasd',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ],
      },
      // More sections...
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    /* const [selectedColor, setSelectedColor] = useState(product.colors[0]) */
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  
    return (
        <Layout>
            <div className="bg-white mt-16">
                <div className="max-w-2xl mx-auto pt-16 px-4 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                        {/* Image gallery */}
                        <Tab.Group as="div" className="flex flex-col-reverse">
                        {/* Image selector */}
                        <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                            <Tab.List className="grid grid-cols-4 gap-6">
                                {product.images.map((image) => (
                                    <Tab
                                        key={image.id}
                                        className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-0 focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                                    >
                                        {({ selected }) => (
                                        <>
                                          <span className="sr-only">{image.name}</span>
                                          <span className="absolute inset-0 rounded-md overflow-hidden">
                                            <Image 
                                                src={image.src}
                                                alt=""
                                                layout="responsive"
                                                width="100%"
                                                height="100%"
                                                objectFit='cover'
                                                className="w-full h-full object-center object-cover"
                                            />
                                          </span>
                                          <span
                                            className={classNames(
                                              selected ? 'ring-bobred' : 'ring-transparent',
                                              'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                                            )}
                                            aria-hidden="true"
                                          />
                                        </>
                                      )}
                                    </Tab>
                                ))}
                            </Tab.List>
                        </div>
                                    
                        <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                            {product.images.map((image) => (
                                <Tab.Panel key={image.id}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    layout="responsive"
                                    width="60%"
                                    height="70%"
                                    objectFit='cover'
                                    className="w-full h-full  sm:rounded-lg"
                                />
                            </Tab.Panel>
                            ))}
                        </Tab.Panels>
                        </Tab.Group>
                        
                    {/* Product info */}
                    <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>
                        
                      <div className="mt-3">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl text-gray-900">{product.price}</p>
                      </div>
                        
                                
                      <div className="mt-6">
                        <h3 className="sr-only">Description</h3>
                                
                        <div
                          className="text-base text-gray-700 space-y-6"
                          dangerouslySetInnerHTML={{ __html: product.description }}
                        />
                      </div>
                                
                      <form className="mt-6">
                        {/* Size picker */}
                        <div className="mt-8">
                          <div className="flex items-center justify-between">
                            <h2 className="text-sm font-medium text-gray-900">Size</h2>
                            <a href="#" className="text-sm font-medium text-bobred hover:text-bobblue">
                              See sizing chart
                            </a>
                          </div>

                          <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-2">
                            <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                              {product.sizes.map((size) => (
                                <RadioGroup.Option
                                  key={size.name}
                                  value={size}
                                  className={({ active, checked }) =>
                                    classNames(
                                      size.inStock ? 'cursor-pointer focus:outline-none' : 'opacity-25 cursor-not-allowed',
                                      active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                                      checked
                                        ? 'bg-bobred border-transparent text-white hover:bg-bobblue'
                                        : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                                      'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                                    )
                                  }
                                  disabled={!size.inStock}
                                >
                                  <RadioGroup.Label as="p">{size.name}</RadioGroup.Label>
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
                          {product.details.map((detail) => (
                            <Disclosure as="div" key={detail.name}>
                              {({ open }) => (
                                <>
                                  <h3>
                                    <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                                      <span
                                        className={classNames(open ? 'text-bobred' : 'text-gray-900', 'text-sm font-medium')}
                                      >
                                        {detail.name}
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
                                  <Disclosure.Panel as="div" className="pb-6 prose prose-sm">
                                    <ul role="list">
                                      {detail.items.map((item) => (
                                        <li key={item}>{item}</li>
                                      ))}
                                    </ul>
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          ))}
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
    </Layout>
    )
}
  