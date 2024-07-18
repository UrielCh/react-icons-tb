import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cup icon from Tabler Icons
 * @module
 */
export function TbCup(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 11h14v-3h-14z"}},{tag:"path",attr:{d:"M17.5 11l-1.5 10h-8l-1.5 -10"},child:[]},{tag:"path",attr:{d:"M6 8v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1"},child:[]},{tag:"path",attr:{d:"M15 5v-2"},child:[]}]})(props);
}
export default TbCup;
