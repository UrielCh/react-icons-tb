import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CapProjecting icon from Tabler Icons
 * @module
 */
export function TbCapProjecting(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 6h-13a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h13"}},{tag:"path",attr:{d:"M13 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0"},child:[]},{tag:"path",attr:{d:"M13 12h7"},child:[]}]})(props);
}
export default TbCapProjecting;
