import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowsDiagonalMinimize icon from Tabler Icons
 * @module
 */
export function TbArrowsDiagonalMinimize(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 10h4v-4"}},{tag:"path",attr:{d:"M4 4l6 6"},child:[]},{tag:"path",attr:{d:"M18 14h-4v4"},child:[]},{tag:"path",attr:{d:"M14 14l6 6"},child:[]}]})(props);
}
export default TbArrowsDiagonalMinimize;
