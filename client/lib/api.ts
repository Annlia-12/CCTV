const DEFAULT_API_BASE_URL = "http://localhost:5000";

export const API_BASE_URL =
  import.meta.env.VITE_BACKEND_URL?.trim().replace(/\/$/, "") || DEFAULT_API_BASE_URL;

export function apiUrl(path: string) {
  if (!path) {
    return API_BASE_URL;
  }

  return `${API_BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}
