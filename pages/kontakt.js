import Layout from "../components/Layout";
import Image from "next/image";
import contactPic from "../public/image1/image00006.jpeg";
import KontaktForm from "../components/KontaktForm";
import KontaktBody from "../components/KontaktBody";

export default function Example() {
  return (
    <Layout>
      <div className="h-96">
        <Image
          src={contactPic}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-center object-cover group-hover:opacity-75"
          alt="Contact"
        />
      </div>
      <div className="relative bg-gray-100 mt-24">
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <KontaktBody />
          <KontaktForm />
        </div>
        <div className="h-32 bg-white"></div>
      </div>
    </Layout>
  );
}
