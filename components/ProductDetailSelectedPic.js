import MyImage from "./ProductDetailImage";
import { Tab } from "@headlessui/react";

const SelectedImage = ({ image }) => {
  return (
    <Tab.Panel key={image.id}>
      <MyImage
        image={image.attributes.formats.medium}
        layoutOpt="responsive"
        iwidth="60%"
        iheight="70%"
        fit="cover"
        style="w-full h-full  sm:rounded-lg"
      />
    </Tab.Panel>
  );
};

export default SelectedImage;
