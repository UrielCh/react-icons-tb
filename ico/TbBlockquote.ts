import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Blockquote icon from Tabler Icons
 * @module
 */
export function TbBlockquote(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 15h15"}},{tag:"path",attr:{d:"M21 19h-15"},child:[]},{tag:"path",attr:{d:"M15 11h6"},child:[]},{tag:"path",attr:{d:"M21 7h-6"},child:[]},{tag:"path",attr:{d:"M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"},child:[]},{tag:"path",attr:{d:"M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2"},child:[]}]})(props);
}
export default TbBlockquote;
