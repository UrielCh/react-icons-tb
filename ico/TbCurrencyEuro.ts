import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CurrencyEuro icon from Tabler Icons
 * @module
 */
export function TbCurrencyEuro(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.2 7a6 7 0 1 0 0 10"}},{tag:"path",attr:{d:"M13 10h-8m0 4h8"},child:[]}]})(props);
}
export default TbCurrencyEuro;
