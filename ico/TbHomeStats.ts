import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HomeStats icon from Tabler Icons
 * @module
 */
export function TbHomeStats(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 13v-1h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h2.5"}},{tag:"path",attr:{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2"},child:[]},{tag:"path",attr:{d:"M13 22l3 -3l2 2l4 -4"},child:[]},{tag:"path",attr:{d:"M19 17h3v3"},child:[]}]})(props);
}
export default TbHomeStats;
