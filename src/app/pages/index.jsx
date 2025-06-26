import { fetchHomepageContent } from "@/services/homepage";

export async function getStaticProps() {
  const homeData = await fetchHomepageContent();

  return {
    props: { homeData },
    revalidate: 60,
  };
}

export default function HomePage({ homeData }) {
  return (
    <div>
      <h1>{homeData.hero_title}</h1>
      <p>{homeData.hero_description}</p>
      {/* Render featured products/categories */}
    </div>
  );
}
