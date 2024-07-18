import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowsRight icon from Tabler Icons
 * @module
 */
export function TbArrowsRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 17l-18 0"}},{tag:"path",attr:{d:"M18 4l3 3l-3 3"},child:[]},{tag:"path",attr:{d:"M18 20l3 -3l-3 -3"},child:[]},{tag:"path",attr:{d:"M21 7l-18 0"},child:[]}]})(props);
}
export default TbArrowsRight;
