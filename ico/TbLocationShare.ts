import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LocationShare icon from Tabler Icons
 * @module
 */
export function TbLocationShare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.616 10.015"}},{tag:"path",attr:{d:"M16 22l5 -5"},child:[]},{tag:"path",attr:{d:"M21 21.5v-4.5h-4.5"},child:[]}]})(props);
}
export default TbLocationShare;
