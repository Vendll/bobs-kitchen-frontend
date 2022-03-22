import Layout from "../components/layout";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import contactPic from "../public/image1/image00005.jpeg";
import contactPic2 from "../public/image1/image00006.jpeg";
import contactPic3 from "../public/image1/image00007.jpeg";
import contactPic4 from "../public/image1/image00008.jpeg";
import contactPic5 from "../public/image1/image00001.jpeg";
import contactPic6 from "../public/image1/image00002.jpeg";
import contactPic7 from "../public/image1/image00003.jpeg";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex-col sm:grid mx-3 sm:mx-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="KEPMODAL">
          <div className=" inset-0 flex items-center justify-center">
            <div
              onClick={openModal}
              className="p-4 w-96 h-96 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <div className="block w-full h-full">
                <Image
                  src={contactPic}
                  layout="responsive"
                  objectFit="contain"
                  width={384}
                  height={384}
                  style="w-fit h-full object-center object-contain rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
        class="block w-full"
        alt="Wild Landscape"
      />
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
        class="block w-full"
        alt="Camera"
      />
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        class="block w-full"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}

          <Transition show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="absolute top-0 bottom-0 inset-0 z-10 overflow-y-auto"
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
    </>
  );
}
