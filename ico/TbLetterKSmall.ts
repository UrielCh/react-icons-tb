import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LetterKSmall icon from Tabler Icons
 * @module
 */
export function TbLetterKSmall(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.5 8v8"}},{tag:"path",attr:{d:"M14.5 8l-3 4l3 4"},child:[]},{tag:"path",attr:{d:"M10.5 12h1"},child:[]}]})(props);
}
export default TbLetterKSmall;
