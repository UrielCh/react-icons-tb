import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Spy icon from Tabler Icons
 * @module
 */
export function TbSpy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 11h18"}},{tag:"path",attr:{d:"M5 11v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4"},child:[]},{tag:"path",attr:{d:"M7 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"},child:[]},{tag:"path",attr:{d:"M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"},child:[]},{tag:"path",attr:{d:"M10 17h4"},child:[]}]})(props);
}
export default TbSpy;
