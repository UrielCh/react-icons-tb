import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowLeftRhombus icon from Tabler Icons
 * @module
 */
export function TbArrowLeftRhombus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 12h-13"}},{tag:"path",attr:{d:"M6 9l-3 3l3 3"},child:[]},{tag:"path",attr:{d:"M18.5 9.5l2.5 2.5l-2.5 2.5l-2.5 -2.5z"},child:[]}]})(props);
}
export default TbArrowLeftRhombus;
