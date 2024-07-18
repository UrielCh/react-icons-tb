import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowsRightLeft icon from Tabler Icons
 * @module
 */
export function TbArrowsRightLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7l-18 0"}},{tag:"path",attr:{d:"M18 10l3 -3l-3 -3"},child:[]},{tag:"path",attr:{d:"M6 20l-3 -3l3 -3"},child:[]},{tag:"path",attr:{d:"M3 17l18 0"},child:[]}]})(props);
}
export default TbArrowsRightLeft;
