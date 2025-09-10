import { Route } from "@playwright/test";

type Product = { id: string; name: string; price: number };
type ProductListResponse = { data: Product[] };

function generateProduct(id: number): Product {
  return {
    id: id.toString(),
    name: `Mock Product ${id}`,
    price: Math.floor(Math.random() * 1000) + 1,
  };
}

export async function mockProducts(route: Route) {
  const products: Product[] = Array.from({ length: 20 }, (_, i) =>
    generateProduct(i + 1)
  );

  const response: ProductListResponse = { data: products };

  await route.fulfill({
    status: 200,
    contentType: "application/json",
    body: JSON.stringify(response),
  });
}
