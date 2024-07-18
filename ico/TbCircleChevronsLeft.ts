import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleChevronsLeft icon from Tabler Icons
 * @module
 */
export function TbCircleChevronsLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 15l-3 -3l3 -3"}},{tag:"path",attr:{d:"M11 15l-3 -3l3 -3"},child:[]},{tag:"path",attr:{d:"M21 12a9 9 0 1 0 0 .265l0 -.265z"},child:[]}]})(props);
}
export default TbCircleChevronsLeft;
