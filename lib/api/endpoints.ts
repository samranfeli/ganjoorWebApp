export const endpoints = {
  centuries: "/api/ganjoor/centuries",
  poets: "/api/ganjoor/poets",
  poetByUrl: "/api/ganjoor/poet",
  pageByUrl:"/api/ganjoor/page",
  search:"/api/ganjoor/poems/search",
  faq: {
    categories: "/api/faq/cat",
    items: "/api/faq/cat/items",
  },
} as const;
