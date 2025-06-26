import Stack from "../lib/contentstack";

export async function fetchProductsByCategorySlug(slug) {
  const categoryRes = await Stack.ContentType("category")
    .Query()
    .where("url", slug)
    .toJSON()
    .find();

  const category = categoryRes[0][0];
  if (!category) return [];

  const productRes = await Stack.ContentType("product")
    .Query()
    .referenceIn("category", [category.uid])
    .includeReference(["category"])
    .toJSON()
    .find();

  return {
    category,
    products: productRes[0],
  };
}
