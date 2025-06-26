import Stack from "../lib/contentstack";

export async function fetchNavigationMenu() {
  const result = await Stack.ContentType("navigation_menu")
    .Query()
    .includeReference(["links.linked_entry"])
    .toJSON()
    .find();

  return result[0][0]?.links || [];
}
