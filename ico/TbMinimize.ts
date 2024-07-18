import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Minimize icon from Tabler Icons
 * @module
 */
export function TbMinimize(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 19v-2a2 2 0 0 1 2 -2h2"}},{tag:"path",attr:{d:"M15 5v2a2 2 0 0 0 2 2h2"},child:[]},{tag:"path",attr:{d:"M5 15h2a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"M5 9h2a2 2 0 0 0 2 -2v-2"},child:[]}]})(props);
}
export default TbMinimize;
