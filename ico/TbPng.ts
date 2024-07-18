import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Png icon from Tabler Icons
 * @module
 */
export function TbPng(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1"}},{tag:"path",attr:{d:"M3 16v-8h2a2 2 0 1 1 0 4h-2"},child:[]},{tag:"path",attr:{d:"M10 16v-8l4 8v-8"},child:[]}]})(props);
}
export default TbPng;
