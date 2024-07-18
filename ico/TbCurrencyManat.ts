import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CurrencyManat icon from Tabler Icons
 * @module
 */
export function TbCurrencyManat(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 19v-7a5 5 0 1 1 10 0v7"}},{tag:"path",attr:{d:"M12 5v14"},child:[]}]})(props);
}
export default TbCurrencyManat;
