import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MeterSquare icon from Tabler Icons
 * @module
 */
export function TbMeterSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 5h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"}},{tag:"path",attr:{d:"M4 12v6"},child:[]},{tag:"path",attr:{d:"M4 14a2 2 0 0 1 2 -2h.5a2.5 2.5 0 0 1 2.5 2.5v3.5"},child:[]},{tag:"path",attr:{d:"M9 15.5v-1a2.5 2.5 0 1 1 5 0v3.5"},child:[]}]})(props);
}
export default TbMeterSquare;
