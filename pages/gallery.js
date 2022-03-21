import Layout from "../components/layout";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import contactPic from "../public/image2/image00005.jpeg";

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
      {/*   <div class="px-4 py-6 mb-4 sm:mb-0 bg-indigo-200 hover:bg-indigo-300 justify-items-center rounded-md transition-colors duration-200">
        <div class="w-full h-64 mb-4 items-center mx-auto">
          <img class="w-fit h-full object-contain" src="bird.svg" alt="" />
        </div>
        <div class="container text-center">
          <p class="text-orange-500 text-xs font-bold">Új</p>
          <h4 class="font-bold">Teszt Product</h4>
          <p class="">30 000 Ft</p>
        </div>
      </div> */}
      <div className="flex items-center justify-center">
        <div
          onClick={openModal}
          className="p-4 w-96 h-96 bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <Image
            src={contactPic}
            layout="responsive"
            objectFit="contain"
            className=" h-fit object-center object-contain group-hover:opacity-75"
          />
        </div>
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="relative inset-x-0 inset-y-0 opacity-75 bg-bobgray" />
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
              <div className="relative w-content h-screen mt-0 p-0  overflow-hidden text-right align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <button
                  type="button"
                  className="absolute z-20 top-4 right-4 text-xl font-medium text-bobblue  border border-transparent rounded-md hover:text-bobred focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent"
                  onClick={closeModal}
                >
                  X
                </button>
                <div className="relative">
                  <div className="w-content h-[100%] mx-auto">
                    <Image
                      src={contactPic}
                      layout="intrinsic"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
