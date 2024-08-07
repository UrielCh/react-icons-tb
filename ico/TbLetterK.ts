import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LetterK icon from Tabler Icons
 * @module
 */
export function TbLetterK(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 4l0 16"}},{tag:"path",attr:{d:"M7 12h2l8 -8"},child:[]},{tag:"path",attr:{d:"M9 12l8 8"},child:[]}]})(props);
}
export default TbLetterK;
