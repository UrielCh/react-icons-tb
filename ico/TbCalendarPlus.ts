import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CalendarPlus icon from Tabler Icons
 * @module
 */
export function TbCalendarPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5"}},{tag:"path",attr:{d:"M16 3v4"},child:[]},{tag:"path",attr:{d:"M8 3v4"},child:[]},{tag:"path",attr:{d:"M4 11h16"},child:[]},{tag:"path",attr:{d:"M16 19h6"},child:[]},{tag:"path",attr:{d:"M19 16v6"},child:[]}]})(props);
}
export default TbCalendarPlus;
