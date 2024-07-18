import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowRightCircle icon from Tabler Icons
 * @module
 */
export function TbArrowRightCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 15l3 -3l-3 -3"}},{tag:"path",attr:{d:"M5 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]},{tag:"path",attr:{d:"M7 12h14"},child:[]}]})(props);
}
export default TbArrowRightCircle;
