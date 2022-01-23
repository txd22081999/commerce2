import { BASE_URL } from "./constants";

export function getUrl(url: string): string {
  return BASE_URL + url;
}
