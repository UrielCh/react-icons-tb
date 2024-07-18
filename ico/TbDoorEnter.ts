import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DoorEnter icon from Tabler Icons
 * @module
 */
export function TbDoorEnter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 12v.01"}},{tag:"path",attr:{d:"M3 21h18"},child:[]},{tag:"path",attr:{d:"M5 21v-16a2 2 0 0 1 2 -2h6m4 10.5v7.5"},child:[]},{tag:"path",attr:{d:"M21 7h-7m3 -3l-3 3l3 3"},child:[]}]})(props);
}
export default TbDoorEnter;
