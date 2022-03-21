import Image from "next/image";
import aboutPic from "../public/image1/image00003.jpeg";

export default function ShortAbout() {
  return (
    <div className="relative md:grid md:grid-cols-2 bg-white mt-24">
      <div className="relative md:col-span-1 md:w-[50vw]">
        <div className="inset-y-0 lg:left-0 h-[50vh]">
          <Image src={aboutPic} layout="fill" objectFit="cover" alt="" />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid">
        <div className="lg:pl-8">
          <div className="text-base  mx-auto md:ml-auto">
            <h2 className="leading-6 text-bobred font-semibold tracking-wide uppercase">
              Work with us
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-bobblue sm:text-4xl">
              Our Process
            </h3>
            <p className="mt-8 text-lg text-gray-500">
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
              urna sed consectetur neque tristique pellentesque. Blandit amet,
              sed aenean erat arcu morbi.
            </p>
            <div className="mt-5  text-gray-500">
              <p>
                Sollicitudin tristique eros erat odio sed vitae, consequat
                turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros
                eu viverra donec ut volutpat donec laoreet quam urna.
              </p>
              <p>
                Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique
                sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et
                et et sit. Faucibus sed non gravida lectus dignissim imperdiet
                a.
              </p>
              <h3>Miért vagyunk mások?</h3>
              <p>
                Tincidunt integer commodo, cursus etiam aliquam neque, et.
                Consectetur pretium in volutpat, diam. Montes, magna cursus
                nulla feugiat dignissim id lobortis amet. Laoreet sem est
                phasellus eu proin massa, lectus. Diam rutrum posuere donec
                ultricies non morbi. Mi a platea auctor mi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
