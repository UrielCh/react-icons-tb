import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpSquare icon from Tabler Icons
 * @module
 */
export function TbArrowUpSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 17l0 -14"}},{tag:"path",attr:{d:"M15 6l-3 -3l-3 3"},child:[]},{tag:"path",attr:{d:"M10 21v-4h4v4z"},child:[]}]})(props);
}
export default TbArrowUpSquare;
