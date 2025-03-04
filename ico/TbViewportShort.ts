import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ViewportShort icon from Tabler Icons
 * @module
 */
export function TbViewportShort(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3v7l3 -3"}},{tag:"path",attr:{d:"M9 7l3 3"},child:[]},{tag:"path",attr:{d:"M12 21v-7l3 3"},child:[]},{tag:"path",attr:{d:"M9 17l3 -3"},child:[]},{tag:"path",attr:{d:"M18 9h1a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-1"},child:[]},{tag:"path",attr:{d:"M6 9h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1"},child:[]}]})(props);
}
export default TbViewportShort;
