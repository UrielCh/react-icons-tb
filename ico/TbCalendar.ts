import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Calendar icon from Tabler Icons
 * @module
 */
export function TbCalendar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"}},{tag:"path",attr:{d:"M16 3v4"},child:[]},{tag:"path",attr:{d:"M8 3v4"},child:[]},{tag:"path",attr:{d:"M4 11h16"},child:[]},{tag:"path",attr:{d:"M11 15h1"},child:[]},{tag:"path",attr:{d:"M12 15v3"},child:[]}]})(props);
}
export default TbCalendar;
