import Stack from "../lib/contentstack";

export async function fetchHomepageContent() {
  const result = await Stack.ContentType("homepage")
    .Query()
    .includeReference(["featured_products", "featured_categories"])
    .toJSON()
    .find();

  return result[0]?.[0] || null;
}
