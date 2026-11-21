/**
 * Safe image path helper compatible with both local dev (basePath="")
 * and GitHub Pages static export (NEXT_PUBLIC_BASE_PATH="/rawinala").
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function getMediaPath(relativePath: string): string {
  if (!relativePath) return "";
  if (relativePath.startsWith("http://") || relativePath.startsWith("https://")) {
    return relativePath;
  }
  const cleanPath = relativePath.startsWith("/")
    ? relativePath
    : `/${relativePath}`;
  return `${BASE_PATH}${cleanPath}`;
}
