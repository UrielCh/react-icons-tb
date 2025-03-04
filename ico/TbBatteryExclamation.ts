import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BatteryExclamation icon from Tabler Icons
 * @module
 */
export function TbBatteryExclamation(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 17h8c1.105 0 2 -.895 2 -2v-.5c0 -.276 .224 -.5 .5 -.5s.5 -.224 .5 -.5v-3c0 -.276 -.224 -.5 -.5 -.5s-.5 -.224 -.5 -.5v-.5c0 -1.105 -.895 -2 -2 -2h-11c-1.105 0 -2 .895 -2 2v3"}},{tag:"path",attr:{d:"M5 16v3"},child:[]},{tag:"path",attr:{d:"M5 22v.01"},child:[]}]})(props);
}
export default TbBatteryExclamation;
