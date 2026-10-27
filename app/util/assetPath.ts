export function getAssetPath(path: string): string {
  const basePath =
    process.env.NODE_ENV === "production" ? "/rivaura-institution-website" : "";
  // Ensure leading slash
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}