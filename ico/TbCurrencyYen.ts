import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CurrencyYen icon from Tabler Icons
 * @module
 */
export function TbCurrencyYen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 19v-7l-5 -7m10 0l-5 7"}},{tag:"path",attr:{d:"M8 17l8 0"},child:[]},{tag:"path",attr:{d:"M8 13l8 0"},child:[]}]})(props);
}
export default TbCurrencyYen;
