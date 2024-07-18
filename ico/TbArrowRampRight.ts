import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowRampRight icon from Tabler Icons
 * @module
 */
export function TbArrowRampRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 3l0 8.707"}},{tag:"path",attr:{d:"M11 7l-4 -4l-4 4"},child:[]},{tag:"path",attr:{d:"M17 14l4 -4l-4 -4"},child:[]},{tag:"path",attr:{d:"M7 21a11 11 0 0 1 11 -11h3"},child:[]}]})(props);
}
export default TbArrowRampRight;
