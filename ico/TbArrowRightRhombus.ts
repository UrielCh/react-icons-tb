import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowRightRhombus icon from Tabler Icons
 * @module
 */
export function TbArrowRightRhombus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 12h13"}},{tag:"path",attr:{d:"M18 9l3 3l-3 3"},child:[]},{tag:"path",attr:{d:"M5.5 9.5l-2.5 2.5l2.5 2.5l2.5 -2.5z"},child:[]}]})(props);
}
export default TbArrowRightRhombus;
