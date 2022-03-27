import FsLightbox from "fslightbox-react";

import Layout from "../components/Layout";

import { useState } from "react";
import contactPic from "../public/image2/image00005.jpeg";
import contactPic2 from "../public/image1/image00006.jpeg";
import contactPic3 from "../public/image1/image00007.jpeg";
import contactPic4 from "../public/image1/image00008.jpeg";
import contactPic5 from "../public/image1/image00001.jpeg";
import contactPic6 from "../public/image1/image00002.jpeg";
import contactPic7 from "../public/image1/image00003.jpeg";

let productsImages = [
  { photo: contactPic, key: 1 },
  { photo: contactPic2, key: 2 },
  { photo: contactPic3, key: 3 },
  { photo: contactPic4, key: 4 },
];
export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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
      <>
        {/*         <div className="mx-36 h-[50vh] mt-36">
          <div className="flex-col sm:grid mx-3 sm:mx-0 sm:grid-cols-2 md:grid-cols-3  gap-4 my-24">
            <div className="KEPMODAL border-2 border-bobred ">
              <div className="border-2 border-bobblue inset-0 flex items-center justify-center">
                <div
                  onClick={() => openLightboxOnSlide(1)}
                  className="p-4 w-full h-96 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                  <div className="block relative h-72 border-2 border-bobred">
                    <Image
                      src={contactPic}
                      layout="fill"
                      objectFit="contain"
                      key="1342"
                    />
                  </div>
                  <div className="text-center mt-2">
                    Niggaaaaaaaaasaaasasasasasasasas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-36 h-96">
          <button onClick={() => openLightboxOnSlide(1)}>
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
          </button>

          <FsLightbox
            toggler={lightboxController.toggler}
            sources={productsImages}
            slide={lightboxController.slide}
          />
        </div> */}
      </>
    </Layout>
  );
}
