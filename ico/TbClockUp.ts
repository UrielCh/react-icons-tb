import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ClockUp icon from Tabler Icons
 * @module
 */
export function TbClockUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.983 12.548a9 9 0 1 0 -8.45 8.436"}},{tag:"path",attr:{d:"M19 22v-6"},child:[]},{tag:"path",attr:{d:"M22 19l-3 -3l-3 3"},child:[]},{tag:"path",attr:{d:"M12 7v5l2.5 2.5"},child:[]}]})(props);
}
export default TbClockUp;
