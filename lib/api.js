export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    "https://bobskitchenbackend-ojs88.ondigitalocean.app"
  }${path}`;
}
