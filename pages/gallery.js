import FsLightbox from "fslightbox-react";
import Image from "next/image";

import Layout from "../components/Layout";

import { useState } from "react";
import contactPic from "../public/image2/image00005.jpeg";
import contactPic2 from "../public/image1/image00006.jpeg";
import contactPic3 from "../public/image1/image00007.jpeg";
import contactPic4 from "../public/image1/image00008.jpeg";
import contactPic5 from "../public/image1/image00001.jpeg";
import contactPic6 from "../public/image1/image00002.jpeg";
import contactPic7 from "../public/image1/image00003.jpeg";

let productImages = [
  "image2/image00005.jpeg",
  "image1/image00006.jpeg",
  "image1/image00007.jpeg",
  "image1/image00008.jpeg",

  /* { contactPic },
  { contactPic2 },
  { contactPic3 },
  { contactPic4 }, */
];

export default function MyModal() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }
  return (
    <Layout>
      <div className="px-4 md:px-32 pt-32 pb-8 bg-gray-300">
        <div className="flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {productImages.map((item, index) => (
            <div className="KEPMODAL border-2 border-bobred bg-gray-200 rounded-md my-4 sm:my-0">
              <div className="border-2 border-bobblue rounded-md inset-0 flex items-center justify-center">
                <div
                  onClick={() => openLightboxOnSlide(index + 1)}
                  className="px-4 pt-4 w-full h-[22rem] hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                  <div className="block relative h-72 border-2 border-bobred">
                    <Image
                      src={contactPic}
                      layout="fill"
                      objectFit="contain"
                      key="1342"
                    />
                  </div>
                  <div className="text-center mt-2 break-all">
                    Niggaaaaaaaaasaaasasasasasasasas
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <button onClick={() => openLightboxOnSlide(1)}>
            Open lightbox on first slide.
          </button>
          <br></br>
          <button onClick={() => openLightboxOnSlide(2)}>
            Open lightbox on second slide.
          </button>
          <br></br>
          <button onClick={() => openLightboxOnSlide(3)}>
            Open lightbox on 3 slide.
          </button>
          <br></br>
          <button onClick={() => openLightboxOnSlide(4)}>
            Open lightbox on 4 slide.
          </button> */}

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={productImages}
        slide={lightboxController.slide}
      />
    </Layout>
  );
}
