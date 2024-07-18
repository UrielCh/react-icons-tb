import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowsUp icon from Tabler Icons
 * @module
 */
export function TbArrowsUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3l0 18"}},{tag:"path",attr:{d:"M4 6l3 -3l3 3"},child:[]},{tag:"path",attr:{d:"M20 6l-3 -3l-3 3"},child:[]},{tag:"path",attr:{d:"M7 3l0 18"},child:[]}]})(props);
}
export default TbArrowsUp;
