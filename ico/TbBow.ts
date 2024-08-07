import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bow icon from Tabler Icons
 * @module
 */
export function TbBow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3h4v4"}},{tag:"path",attr:{d:"M21 3l-15 15"},child:[]},{tag:"path",attr:{d:"M3 18h3v3"},child:[]},{tag:"path",attr:{d:"M16.5 20c1.576 -1.576 2.5 -4.095 2.5 -6.5c0 -4.81 -3.69 -8.5 -8.5 -8.5c-2.415 0 -4.922 .913 -6.5 2.5l12.5 12.5z"},child:[]}]})(props);
}
export default TbBow;
