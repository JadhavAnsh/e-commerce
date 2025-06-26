import { fetchProductBySlug } from "@/services/products";

export async function getStaticPaths() {
  const data = await Stack.ContentType("product").Query().toJSON().find();

  const paths = data[0].map((item) => ({
    params: { slug: item.url },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = await fetchProductBySlug(params.slug);
  return { props: { product } };
}

export default function ProductPage({ product }) {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}
