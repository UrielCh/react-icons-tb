import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ticket icon from Tabler Icons
 * @module
 */
export function TbTicket(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 5l0 2"}},{tag:"path",attr:{d:"M15 11l0 2"},child:[]},{tag:"path",attr:{d:"M15 17l0 2"},child:[]},{tag:"path",attr:{d:"M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"},child:[]}]})(props);
}
export default TbTicket;
