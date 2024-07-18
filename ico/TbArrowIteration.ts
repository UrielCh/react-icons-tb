import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowIteration icon from Tabler Icons
 * @module
 */
export function TbArrowIteration(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8.5 16a5.5 5.5 0 1 0 -5.5 -5.5v.5"}},{tag:"path",attr:{d:"M3 16h18"},child:[]},{tag:"path",attr:{d:"M18 13l3 3l-3 3"},child:[]}]})(props);
}
export default TbArrowIteration;
