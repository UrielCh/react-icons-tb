import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Lego icon from Tabler Icons
 * @module
 */
export function TbLego(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9.5 11l.01 0"}},{tag:"path",attr:{d:"M14.5 11l.01 0"},child:[]},{tag:"path",attr:{d:"M9.5 15a3.5 3.5 0 0 0 5 0"},child:[]},{tag:"path",attr:{d:"M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3"},child:[]}]})(props);
}
export default TbLego;
