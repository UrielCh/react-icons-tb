import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowsUpLeft icon from Tabler Icons
 * @module
 */
export function TbArrowsUpLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7l-4 -4l-4 4"}},{tag:"path",attr:{d:"M17 3v11a3 3 0 0 1 -3 3h-11"},child:[]},{tag:"path",attr:{d:"M7 13l-4 4l4 4"},child:[]}]})(props);
}
export default TbArrowsUpLeft;
