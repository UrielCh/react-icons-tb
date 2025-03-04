import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ferry icon from Tabler Icons
 * @module
 */
export function TbFerry(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 18h15.293c1.02 0 1.972 -.503 2.536 -1.34l2.171 -3.66h-18.479z"}},{tag:"path",attr:{d:"M14 8l-1 -2"},child:[]},{tag:"path",attr:{d:"M6.107 12.675l1.384 -4.675h8l2.675 4.598"},child:[]}]})(props);
}
export default TbFerry;
