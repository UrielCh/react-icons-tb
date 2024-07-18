import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpRhombus icon from Tabler Icons
 * @module
 */
export function TbArrowUpRhombus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 16v-13"}},{tag:"path",attr:{d:"M15 6l-3 -3l-3 3"},child:[]},{tag:"path",attr:{d:"M14.5 18.5l-2.5 2.5l-2.5 -2.5l2.5 -2.5z"},child:[]}]})(props);
}
export default TbArrowUpRhombus;
