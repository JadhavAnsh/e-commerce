import Stack from "../lib/contentstack";

export async function fetchProductBySlug(slug) {
  const result = await Stack.ContentType("product")
    .Query()
    .where("url", slug)
    .includeReference(["category"])
    .toJSON()
    .find();

  return result[0][0] || null;
}
