import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ClockCheck icon from Tabler Icons
 * @module
 */
export function TbClockCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.942 13.021a9 9 0 1 0 -9.407 7.967"}},{tag:"path",attr:{d:"M12 7v5l3 3"},child:[]},{tag:"path",attr:{d:"M15 19l2 2l4 -4"},child:[]}]})(props);
}
export default TbClockCheck;
