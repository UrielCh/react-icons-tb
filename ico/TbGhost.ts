import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ghost icon from Tabler Icons
 * @module
 */
export function TbGhost(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7"}},{tag:"path",attr:{d:"M10 10l.01 0"},child:[]},{tag:"path",attr:{d:"M14 10l.01 0"},child:[]},{tag:"path",attr:{d:"M10 14a3.5 3.5 0 0 0 4 0"},child:[]}]})(props);
}
export default TbGhost;
