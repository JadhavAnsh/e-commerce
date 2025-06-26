import { fetchProductsByCategorySlug } from "@/services/categories";

export async function getStaticPaths() {
  const data = await Stack.ContentType("category").Query().toJSON().find();
  const paths = data[0].map((item) => ({
    params: { slug: item.url },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { category, products } = await fetchProductsByCategorySlug(params.slug);

  return { props: { category, products } };
}

export default function CategoryPage({ category, products }) {
  return (
    <div>
      <h1>{category.title}</h1>
      <ul>
        {products.map((p) => (
          <li key={p.uid}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
