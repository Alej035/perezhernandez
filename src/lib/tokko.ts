export interface TokkoProperty {
  id: number;
  title: string;
  address: string;
  location: { name: string };
  operations: Array<{
    operation_type: string;
    prices: Array<{ currency: string; price: number }>;
  }>;
  photos: Array<{ image: string; is_front_photo: boolean }>;
  surface_total: number;
  surface_covered: number;
  rooms: number;
  bathrooms: number;
  type: { name: string };
  web_url: string;
}

export interface TokkoResponse {
  count: number;
  next: string | null;
  previous: string | null;
  objects: TokkoProperty[];
}

const TOKKO_API_BASE = "https://api.tokkoBroker.com/api/v1";
const TOKKO_API_KEY = process.env.TOKKO_API_KEY ?? "";

export async function getProperties(params: {
  operation_type?: "Venta" | "Alquiler";
  limit?: number;
  offset?: number;
}): Promise<TokkoResponse> {
  const url = new URL(`${TOKKO_API_BASE}/property/`);
  url.searchParams.set("key", TOKKO_API_KEY);
  url.searchParams.set("lang", "es");
  url.searchParams.set("format", "json");
  if (params.limit) url.searchParams.set("limit", String(params.limit));
  if (params.offset) url.searchParams.set("offset", String(params.offset));
  if (params.operation_type)
    url.searchParams.set("operation_type", params.operation_type);

  const res = await fetch(url.toString(), { next: { revalidate: 300 } });
  if (!res.ok) throw new Error(`Tokko API error: ${res.status}`);
  return res.json();
}

export async function getProperty(id: number): Promise<TokkoProperty> {
  const url = new URL(`${TOKKO_API_BASE}/property/${id}/`);
  url.searchParams.set("key", TOKKO_API_KEY);
  url.searchParams.set("lang", "es");
  url.searchParams.set("format", "json");

  const res = await fetch(url.toString(), { next: { revalidate: 300 } });
  if (!res.ok) throw new Error(`Tokko API error: ${res.status}`);
  return res.json();
}

export function getFrontPhoto(property: TokkoProperty): string | null {
  if (!property.photos?.length) return null;
  const front = property.photos.find((p) => p.is_front_photo);
  return (front ?? property.photos[0]).image;
}

export function formatPrice(property: TokkoProperty): string {
  const op = property.operations?.[0];
  if (!op?.prices?.length) return "Consultar";
  const price = op.prices[0];
  return `${price.currency} ${price.price.toLocaleString("es-AR")}`;
}
