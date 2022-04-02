import FsLightbox from "fslightbox-react";
import Image from "next/image";

import { useState } from "react";
import contactPic from "../public/image2/image00005.jpeg";
import contactPic2 from "../public/image1/image00006.jpeg";
import contactPic3 from "../public/image1/image00007.jpeg";
import contactPic4 from "../public/image1/image00008.jpeg";
import contactPic5 from "../public/image1/image00001.jpeg";
import contactPic6 from "../public/image1/image00002.jpeg";
import contactPic7 from "../public/image1/image00003.jpeg";

let productImages = [
  "/image2/image00005.jpeg",
  "/image1/image00006.jpeg",
  "/image1/image00007.jpeg",
  "/image1/image00008.jpeg",

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
    <>
      <div className="px-4 md:px-32 pt-32">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {productImages.map((image, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
            >
              <div className="inset-0 flex items-center justify-center">
                <div
                  onClick={() => openLightboxOnSlide(index + 1)}
                  className=" w-full hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                  <div className="relative h-64 flex-shrink-0">
                    <Image
                      src={image}
                      layout="fill"
                      objectFit="cover"
                      key={image.index}
                      alt="alt text"
                    />
                  </div>
                  <div className="text-center m-2 break-all">
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
    </>
  );
}
