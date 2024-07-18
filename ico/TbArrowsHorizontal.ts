import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowsHorizontal icon from Tabler Icons
 * @module
 */
export function TbArrowsHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 8l-4 4l4 4"}},{tag:"path",attr:{d:"M17 8l4 4l-4 4"},child:[]},{tag:"path",attr:{d:"M3 12l18 0"},child:[]}]})(props);
}
export default TbArrowsHorizontal;
