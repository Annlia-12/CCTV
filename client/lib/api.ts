const DEFAULT_API_BASE_URL = "http://127.0.0.1:5000";

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL?.trim().replace(/\/$/, "") || DEFAULT_API_BASE_URL;

export function apiUrl(path: string) {
  if (!path) {
    return API_BASE_URL;
  }

  return `${API_BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}
