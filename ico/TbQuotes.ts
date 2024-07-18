import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Quotes icon from Tabler Icons
 * @module
 */
export function TbQuotes(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12c-1.333 -1.854 -1.333 -4.146 0 -6"}},{tag:"path",attr:{d:"M8 12c-1.333 -1.854 -1.333 -4.146 0 -6"},child:[]},{tag:"path",attr:{d:"M16 18c1.333 -1.854 1.333 -4.146 0 -6"},child:[]},{tag:"path",attr:{d:"M20 18c1.333 -1.854 1.333 -4.146 0 -6"},child:[]}]})(props);
}
export default TbQuotes;
