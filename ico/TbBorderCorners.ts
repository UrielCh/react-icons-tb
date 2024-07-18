import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BorderCorners icon from Tabler Icons
 * @module
 */
export function TbBorderCorners(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v2"}},{tag:"path",attr:{d:"M20 16v2a2 2 0 0 1 -2 2h-2"},child:[]},{tag:"path",attr:{d:"M8 20h-2a2 2 0 0 1 -2 -2v-2"},child:[]},{tag:"path",attr:{d:"M4 8v-2a2 2 0 0 1 2 -2h2"},child:[]}]})(props);
}
export default TbBorderCorners;
