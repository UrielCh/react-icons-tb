import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CalendarEvent icon from Tabler Icons
 * @module
 */
export function TbCalendarEvent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"}},{tag:"path",attr:{d:"M16 3l0 4"},child:[]},{tag:"path",attr:{d:"M8 3l0 4"},child:[]},{tag:"path",attr:{d:"M4 11l16 0"},child:[]},{tag:"path",attr:{d:"M8 15h2v2h-2z"},child:[]}]})(props);
}
export default TbCalendarEvent;
