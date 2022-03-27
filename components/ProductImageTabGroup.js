import ImageSelector from "./ProductDetailPicSelection";
import SelectedImage from "./ProductDetailSelectedPic";
import { Tab } from "@headlessui/react";

const ImageTabGroup = ({ product }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      {/* Image selector */}
      <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {product.data.attributes.Gallery.data.map((image) => (
            <ImageSelector key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
        {product.data.attributes.Gallery.data.map((image) => (
          <SelectedImage key={image.id} image={image} />
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ImageTabGroup;
