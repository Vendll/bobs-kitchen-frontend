import { getStrapiMedia } from "../lib/media";
import Image from "next/image";

const MyImage = ({ image, style, fit, iwidth, iheight, layoutOpt }) => {
  const { url, alternativeText } = image;

  const loader = () => {
    return getStrapiMedia(image);
  };

  return (
    <Image
      loader={loader}
      layout={layoutOpt}
      width={iwidth}
      height={iheight}
      objectFit={fit}
      src={url}
      alt={alternativeText || ""}
      className={style}
    />
  );
};

export default MyImage;
