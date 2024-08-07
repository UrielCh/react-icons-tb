import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ClockShare icon from Tabler Icons
 * @module
 */
export function TbClockShare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.943 13.016a9 9 0 1 0 -8.915 7.984"}},{tag:"path",attr:{d:"M16 22l5 -5"},child:[]},{tag:"path",attr:{d:"M21 21.5v-4.5h-4.5"},child:[]},{tag:"path",attr:{d:"M12 7v5l2 2"},child:[]}]})(props);
}
export default TbClockShare;
