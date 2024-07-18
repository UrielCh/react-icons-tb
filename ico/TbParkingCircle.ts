import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ParkingCircle icon from Tabler Icons
 * @module
 */
export function TbParkingCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 16v-8h2.667c.736 0 1.333 .895 1.333 2s-.597 2 -1.333 2h-2.667"}},{tag:"path",attr:{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"},child:[]}]})(props);
}
export default TbParkingCircle;
