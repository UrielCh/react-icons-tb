import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Confucius icon from Tabler Icons
 * @module
 */
export function TbConfucius(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19l3 2v-18"}},{tag:"path",attr:{d:"M4 10l8 -2"},child:[]},{tag:"path",attr:{d:"M4 18l8 -10"},child:[]},{tag:"path",attr:{d:"M20 18l-8 -8l8 -4"},child:[]}]})(props);
}
export default TbConfucius;
