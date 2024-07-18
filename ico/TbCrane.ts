import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Crane icon from Tabler Icons
 * @module
 */
export function TbCrane(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 21h6"}},{tag:"path",attr:{d:"M9 21v-18l-6 6h18"},child:[]},{tag:"path",attr:{d:"M9 3l10 6"},child:[]},{tag:"path",attr:{d:"M17 9v4a2 2 0 1 1 -2 2"},child:[]}]})(props);
}
export default TbCrane;
