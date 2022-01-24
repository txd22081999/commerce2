import { BASE_URL } from "../constants";
export * from "./format-price";

export function getUrl(url: string): string {
  return BASE_URL + url;
}
