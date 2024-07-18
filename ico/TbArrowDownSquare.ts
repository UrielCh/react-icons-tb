import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowDownSquare icon from Tabler Icons
 * @module
 */
export function TbArrowDownSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 7v14"}},{tag:"path",attr:{d:"M9 18l3 3l3 -3"},child:[]},{tag:"path",attr:{d:"M14 3v4h-4v-4z"},child:[]}]})(props);
}
export default TbArrowDownSquare;
