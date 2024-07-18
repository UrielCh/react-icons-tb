import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ClockPause icon from Tabler Icons
 * @module
 */
export function TbClockPause(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.942 13.018a9 9 0 1 0 -7.909 7.922"}},{tag:"path",attr:{d:"M12 7v5l2 2"},child:[]},{tag:"path",attr:{d:"M17 17v5"},child:[]},{tag:"path",attr:{d:"M21 17v5"},child:[]}]})(props);
}
export default TbClockPause;
