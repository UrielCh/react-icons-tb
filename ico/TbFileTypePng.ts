import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileTypePng icon from Tabler Icons
 * @module
 */
export function TbFileTypePng(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"}},{tag:"path",attr:{d:"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"},child:[]},{tag:"path",attr:{d:"M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3"},child:[]},{tag:"path",attr:{d:"M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"},child:[]},{tag:"path",attr:{d:"M11 21v-6l3 6v-6"},child:[]}]})(props);
}
export default TbFileTypePng;
