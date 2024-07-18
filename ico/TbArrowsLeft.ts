import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowsLeft icon from Tabler Icons
 * @module
 */
export function TbArrowsLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7l18 0"}},{tag:"path",attr:{d:"M6 20l-3 -3l3 -3"},child:[]},{tag:"path",attr:{d:"M6 4l-3 3l3 3"},child:[]},{tag:"path",attr:{d:"M3 17l18 0"},child:[]}]})(props);
}
export default TbArrowsLeft;
