import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Baseline icon from Tabler Icons
 * @module
 */
export function TbBaseline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 20h16"}},{tag:"path",attr:{d:"M8 16v-8a4 4 0 1 1 8 0v8"},child:[]},{tag:"path",attr:{d:"M8 10h8"},child:[]}]})(props);
}
export default TbBaseline;
