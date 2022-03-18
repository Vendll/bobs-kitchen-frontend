import Image from "next/image"
import Layout from "../../components/layout"

const products = [
    {
      id: 1,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$13',
      description: '3 sizes available',
      imageSrc: '/image2/image00005.jpeg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 2,
      name: 'Focus Card Holder',
      href: '#',
      price: '$64',
      description: 'Walnut',
      imageSrc: '/image2/image00003.jpeg',
      imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
      id: 3,
      name: 'Focus Carry Case',
      href: '#',
      price: '$32',
      description: 'Heather Gray',
      imageSrc: '/image2/image00004.jpeg',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
      id: 1,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$13',
      description: '3 sizes available',
      imageSrc: '/image2/image00005.jpeg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 2,
      name: 'Focus Card Holder',
      href: '#',
      price: '$64',
      description: 'Walnut',
      imageSrc: '/image2/image00003.jpeg',
      imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
      id: 3,
      name: 'Focus Carry Case',
      href: '#',
      price: '$32',
      description: 'Heather Gray',
      imageSrc: '/image2/image00004.jpeg',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
  ]
  
  export default function Products() {
    return (
        <Layout>
            <div className="bg-white">
              <div className="max-w-2xl mx-auto pt-16 mt-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 id="products-heading" className="sr-only">
                  Összes Termék
                </h2>

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                  {products.map((product) => (
                    <a key={product.id} href={product.href} className="group">
                      <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                        <Image
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          layout="responsive"
                          width="65%"
                          height="80%"
                          objectFit='cover'
                          className="w-full h-full object-center object-cover group-hover:opacity-75"
                        />
                      </div>
                      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                      </div>
                      <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
        </Layout>
    )
}