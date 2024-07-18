import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Hdr icon from Tabler Icons
 * @module
 */
export function TbHdr(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 16v-8"}},{tag:"path",attr:{d:"M7 8v8"},child:[]},{tag:"path",attr:{d:"M3 12h4"},child:[]},{tag:"path",attr:{d:"M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z"},child:[]},{tag:"path",attr:{d:"M17 12h2a2 2 0 1 0 0 -4h-2v8m4 0l-3 -4"},child:[]}]})(props);
}
export default TbHdr;
