import { IPrice } from "components/constants";

export function formatPrice(price: IPrice): string {
  return "$" + Number(price).toFixed(2).toString().replace(".", ",");
}
