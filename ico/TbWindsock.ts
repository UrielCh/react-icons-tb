import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Windsock icon from Tabler Icons
 * @module
 */
export function TbWindsock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 3v18"}},{tag:"path",attr:{d:"M6 11l12 -1v-4l-12 -1"},child:[]},{tag:"path",attr:{d:"M10 5.5v5"},child:[]},{tag:"path",attr:{d:"M14 6v4"},child:[]},{tag:"path",attr:{d:"M4 21h4"},child:[]}]})(props);
}
export default TbWindsock;
