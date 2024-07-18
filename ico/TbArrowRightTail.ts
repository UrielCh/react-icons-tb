import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowRightTail icon from Tabler Icons
 * @module
 */
export function TbArrowRightTail(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 15l3 -3l-3 -3"}},{tag:"path",attr:{d:"M3 15l3 -3l-3 -3"},child:[]},{tag:"path",attr:{d:"M6 12l15 0"},child:[]}]})(props);
}
export default TbArrowRightTail;
