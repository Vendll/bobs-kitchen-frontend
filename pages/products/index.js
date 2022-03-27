import Layout from "../../components/layout";
import { fetchAPI } from "../../lib/api";
import ProductList from "../../components/ProductList";

export async function getStaticProps() {
  const data = await fetchAPI("/products", {
    populate: ["Gallery", "Options"],
  });

  return {
    props: {
      product: data,
    },
  };
}

export default function Products(props) {
  const { product } = props;

  return (
    <Layout>
      <ProductList />
    </Layout>
  );
}
