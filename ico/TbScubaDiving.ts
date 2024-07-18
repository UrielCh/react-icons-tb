import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ScubaDiving icon from Tabler Icons
 * @module
 */
export function TbScubaDiving(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}},{tag:"path",attr:{d:"M2 2l3 3l1.5 4l3.5 2l6 2l1 4l2.5 3"},child:[]},{tag:"path",attr:{d:"M11 8l4.5 1.5"},child:[]}]})(props);
}
export default TbScubaDiving;
