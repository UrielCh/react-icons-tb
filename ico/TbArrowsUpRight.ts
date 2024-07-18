import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowsUpRight icon from Tabler Icons
 * @module
 */
export function TbArrowsUpRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21l4 -4l-4 -4"}},{tag:"path",attr:{d:"M21 17h-11a3 3 0 0 1 -3 -3v-11"},child:[]},{tag:"path",attr:{d:"M11 7l-4 -4l-4 4"},child:[]}]})(props);
}
export default TbArrowsUpRight;
