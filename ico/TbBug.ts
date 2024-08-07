import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bug icon from Tabler Icons
 * @module
 */
export function TbBug(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 9v-1a3 3 0 0 1 6 0v1"}},{tag:"path",attr:{d:"M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3"},child:[]},{tag:"path",attr:{d:"M3 13l4 0"},child:[]},{tag:"path",attr:{d:"M17 13l4 0"},child:[]},{tag:"path",attr:{d:"M12 20l0 -6"},child:[]},{tag:"path",attr:{d:"M4 19l3.35 -2"},child:[]},{tag:"path",attr:{d:"M20 19l-3.35 -2"},child:[]},{tag:"path",attr:{d:"M4 7l3.75 2.4"},child:[]},{tag:"path",attr:{d:"M20 7l-3.75 2.4"},child:[]}]})(props);
}
export default TbBug;
