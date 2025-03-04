import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CapStraight icon from Tabler Icons
 * @module
 */
export function TbCapStraight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0"}},{tag:"path",attr:{d:"M8 12h12"},child:[]},{tag:"path",attr:{d:"M20 6h-12a2 2 0 0 0 -2 2v2"},child:[]},{tag:"path",attr:{d:"M6 14v2a2 2 0 0 0 2 2h12"},child:[]}]})(props);
}
export default TbCapStraight;
