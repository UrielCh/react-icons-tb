import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CurrencyShekel icon from Tabler Icons
 * @module
 */
export function TbCurrencyShekel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 18v-12h4a4 4 0 0 1 4 4v4"}},{tag:"path",attr:{d:"M18 6v12h-4a4 4 0 0 1 -4 -4v-4"},child:[]}]})(props);
}
export default TbCurrencyShekel;
