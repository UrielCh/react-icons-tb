import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HomeHeart icon from Tabler Icons
 * @module
 */
export function TbHomeHeart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h6"}},{tag:"path",attr:{d:"M9 21v-6a2 2 0 0 1 2 -2h2c.39 0 .754 .112 1.061 .304"},child:[]},{tag:"path",attr:{d:"M19 21.5l2.518 -2.58a1.74 1.74 0 0 0 0 -2.413a1.627 1.627 0 0 0 -2.346 0l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 0a1.74 1.74 0 0 0 0 2.412l2.51 2.59z"},child:[]}]})(props);
}
export default TbHomeHeart;
