import isString from "lodash/isString";

export function getSizeString(size: string[] | string): string {
  if (isString(size)) {
    return size;
  }

  return size.join(", ");
}
