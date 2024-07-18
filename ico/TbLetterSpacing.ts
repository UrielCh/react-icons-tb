import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LetterSpacing icon from Tabler Icons
 * @module
 */
export function TbLetterSpacing(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5"}},{tag:"path",attr:{d:"M13 4l3 8l3 -8"},child:[]},{tag:"path",attr:{d:"M5 18h14"},child:[]},{tag:"path",attr:{d:"M17 20l2 -2l-2 -2"},child:[]},{tag:"path",attr:{d:"M7 16l-2 2l2 2"},child:[]}]})(props);
}
export default TbLetterSpacing;
