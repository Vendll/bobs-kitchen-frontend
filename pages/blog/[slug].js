import Layout from "../../components/Layout";
import blogPic from "../../public/image2/image00005.jpeg";
import Image from "next/image";
import BlogBody from "../../components/BlogDetailBody";

export default function blogDetail() {
  return (
    <Layout>
      <div className="bg-gray-50 mt-24">
        <div aria-hidden="true" className="relative h-96">
          <Image
            src={blogPic}
            alt=""
            layout="fill"
            objectFit="cover"
            className="w-full h-96 object-center object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-white" /> */}
        </div>
        <BlogBody />

        {/* <dl className="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl> */}
      </div>
    </Layout>
  );
}
