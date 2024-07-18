import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Replace icon from Tabler Icons
 * @module
 */
export function TbReplace(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"}},{tag:"path",attr:{d:"M15 15m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"},child:[]},{tag:"path",attr:{d:"M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3"},child:[]},{tag:"path",attr:{d:"M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3"},child:[]}]})(props);
}
export default TbReplace;
