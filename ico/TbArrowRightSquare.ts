import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowRightSquare icon from Tabler Icons
 * @module
 */
export function TbArrowRightSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 12l14 0"}},{tag:"path",attr:{d:"M18 15l3 -3l-3 -3"},child:[]},{tag:"path",attr:{d:"M3 10h4v4h-4z"},child:[]}]})(props);
}
export default TbArrowRightSquare;
