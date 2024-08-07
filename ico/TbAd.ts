import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ad icon from Tabler Icons
 * @module
 */
export function TbAd(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"}},{tag:"path",attr:{d:"M7 15v-4a2 2 0 0 1 4 0v4"},child:[]},{tag:"path",attr:{d:"M7 13l4 0"},child:[]},{tag:"path",attr:{d:"M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5"},child:[]}]})(props);
}
export default TbAd;
