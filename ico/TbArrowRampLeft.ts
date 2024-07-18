import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowRampLeft icon from Tabler Icons
 * @module
 */
export function TbArrowRampLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3l0 8.707"}},{tag:"path",attr:{d:"M13 7l4 -4l4 4"},child:[]},{tag:"path",attr:{d:"M7 14l-4 -4l4 -4"},child:[]},{tag:"path",attr:{d:"M17 21a11 11 0 0 0 -11 -11h-3"},child:[]}]})(props);
}
export default TbArrowRampLeft;
