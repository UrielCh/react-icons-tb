import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowsDiagonal icon from Tabler Icons
 * @module
 */
export function TbArrowsDiagonal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 4l4 0l0 4"}},{tag:"path",attr:{d:"M14 10l6 -6"},child:[]},{tag:"path",attr:{d:"M8 20l-4 0l0 -4"},child:[]},{tag:"path",attr:{d:"M4 20l6 -6"},child:[]}]})(props);
}
export default TbArrowsDiagonal;
