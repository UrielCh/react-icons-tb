import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Archive icon from Tabler Icons
 * @module
 */
export function TbArchive(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"}},{tag:"path",attr:{d:"M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"},child:[]},{tag:"path",attr:{d:"M10 12l4 0"},child:[]}]})(props);
}
export default TbArchive;
