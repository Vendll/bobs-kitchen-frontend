import FsLightbox from "fslightbox-react";

import Layout from "../components/layout";

import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import contactPic from "../public/image2/image00005.jpeg";
import contactPic2 from "../public/image1/image00006.jpeg";
import contactPic3 from "../public/image1/image00007.jpeg";
import contactPic4 from "../public/image1/image00008.jpeg";
import contactPic5 from "../public/image1/image00001.jpeg";
import contactPic6 from "../public/image1/image00002.jpeg";
import contactPic7 from "../public/image1/image00003.jpeg";

const productsImages = [
  "../public/image2/image00005.jpeg",
  "https://i.imgur.com/fsyrScY.jpg",
  "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
];
export default function MyModal({ productsImages }) {
  /* let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  } */

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
            sources={[
              "image2/image00005.jpeg",
              "image1/image00003.jpeg",
              "image1/image00006.jpeg",
              "image1/image00007.jpeg",
            ]}
            slide={lightboxController.slide}
            captions={[
              <>
                <h2>First image title</h2>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </>,
              <h2>Second image title</h2>,
              "Third image caption",
            ]}
          />
        </div>
        {/*       <div className="mx-36 h-[50vh] mt-36">
        <div className="flex-col sm:grid mx-3 sm:mx-0 sm:grid-cols-2 md:grid-cols-3  gap-4 my-24">
          <div className="KEPMODAL border-2 border-bobred ">
            <div className="border-2 border-bobblue inset-0 flex items-center justify-center">
              <div
                onClick={openModal}
                className="p-4 w-full h-96 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                <div className="block relative h-72 border-2 border-bobred">
                  <Image src={contactPic} layout="fill" objectFit="contain" />
                </div>
                <div className="text-center mt-2">
                  Niggaaaaaaaaasaaasasasasasasasas
                </div>
              </div>
            </div>

            <Transition show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="absolute top-0 bottom-0 inset-0 z-50 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen px-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-400"
                    enterFrom="opacity-20"
                    enterTo="opacity-100"
                    leave="ease-in duration-400"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-20"
                  >
                    <Dialog.Overlay className="absolute inset-x-0 inset-y-0 opacity-75 bg-bobgray" />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="relative w-full h-screen mt-0 p-0  overflow-hidden transition-all transform bg-white shadow-xl rounded-2xl">
                      <button
                        type="button"
                        className="absolute z-20 top-4 right-4 text-xl font-medium text-bobblue  border border-transparent rounded-md hover:text-bobred focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent"
                        onClick={closeModal}
                      >
                        X
                      </button>
                      <div className="relative">
                        <div className="w-content h-[100%] mx-auto mt-6">
                          <Image
                            src={contactPic}
                            layout="intrinsic"
                            objectFit="cover"
                            style="object-contain object-center "
                          />
                        </div>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      </div> */}
      </>
    </Layout>
  );
}
