import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CurrencyLira icon from Tabler Icons
 * @module
 */
export function TbCurrencyLira(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 5v15a7 7 0 0 0 7 -7"}},{tag:"path",attr:{d:"M6 15l8 -4"},child:[]},{tag:"path",attr:{d:"M14 7l-8 4"},child:[]}]})(props);
}
export default TbCurrencyLira;
