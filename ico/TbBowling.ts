import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bowling icon from Tabler Icons
 * @module
 */
export function TbBowling(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 11v.01"}},{tag:"path",attr:{d:"M11 10v.01"},child:[]},{tag:"path",attr:{d:"M10 14v.01"},child:[]},{tag:"path",attr:{d:"M11.059 6.07a8 8 0 1 0 .32 15.81"},child:[]},{tag:"path",attr:{d:"M15.969 9h4"},child:[]},{tag:"path",attr:{d:"M14.969 5c0 1.5 1 2 1 4c0 2.5 -2 4.5 -2 7c0 2.6 1.9 6 1.9 6h4.1s2 -3.4 2 -6c0 -2.5 -2 -4.5 -2 -7c0 -2 1 -2.5 1 -4a3 3 0 1 0 -6 0"},child:[]}]})(props);
}
export default TbBowling;
