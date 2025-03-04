import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ViewportWide icon from Tabler Icons
 * @module
 */
export function TbViewportWide(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 12h-7l3 -3"}},{tag:"path",attr:{d:"M6 15l-3 -3"},child:[]},{tag:"path",attr:{d:"M14 12h7l-3 -3"},child:[]},{tag:"path",attr:{d:"M18 15l3 -3"},child:[]},{tag:"path",attr:{d:"M3 6v-1a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v1"},child:[]},{tag:"path",attr:{d:"M3 18v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-1"},child:[]}]})(props);
}
export default TbViewportWide;
