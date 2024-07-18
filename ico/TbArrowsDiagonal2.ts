import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowsDiagonal2 icon from Tabler Icons
 * @module
 */
export function TbArrowsDiagonal2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 20l4 0l0 -4"}},{tag:"path",attr:{d:"M14 14l6 6"},child:[]},{tag:"path",attr:{d:"M8 4l-4 0l0 4"},child:[]},{tag:"path",attr:{d:"M4 4l6 6"},child:[]}]})(props);
}
export default TbArrowsDiagonal2;
