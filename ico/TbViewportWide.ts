import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ViewportWide icon from Tabler Icons
 * @module
 */
export function TbViewportWide(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 12h-7l3 -3m0 6l-3 -3"}},{tag:"path",attr:{d:"M14 12h7l-3 -3m0 6l3 -3"},child:[]},{tag:"path",attr:{d:"M3 6v-3h18v3"},child:[]},{tag:"path",attr:{d:"M3 18v3h18v-3"},child:[]}]})(props);
}
export default TbViewportWide;
