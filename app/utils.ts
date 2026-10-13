export function getAssetUrl(path: string): string {
  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/rivaura-institution-website" : "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}