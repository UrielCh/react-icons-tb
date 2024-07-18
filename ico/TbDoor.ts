import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Door icon from Tabler Icons
 * @module
 */
export function TbDoor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 12v.01"}},{tag:"path",attr:{d:"M3 21h18"},child:[]},{tag:"path",attr:{d:"M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16"},child:[]}]})(props);
}
export default TbDoor;
