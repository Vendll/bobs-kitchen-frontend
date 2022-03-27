import MyImage from "./ProductDetailImage";
import { Tab } from "@headlessui/react";

const ImageSelector = ({ image }) => {
  return (
    <Tab
      key={image.id}
      className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-0"
    >
      {({ selected }) => (
        <>
          <span className="absolute inset-0 outline-none rounded-md overflow-hidden">
            <MyImage
              image={image.attributes.formats.thumbnail}
              layoutOpt="responsive"
              iwidth="100%"
              iheight="100%"
              fit="cover"
              style="w-full h-full object-center object-cover"
            />
          </span>
          <span
            className={classNames(
              selected ? "ring-bobred" : "ring-transparent",
              "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
            )}
            aria-hidden="true"
          />
        </>
      )}
    </Tab>
  );
};

export default ImageSelector;
