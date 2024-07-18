import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Keyboard icon from Tabler Icons
 * @module
 */
export function TbKeyboard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"}},{tag:"path",attr:{d:"M6 10l0 .01"},child:[]},{tag:"path",attr:{d:"M10 10l0 .01"},child:[]},{tag:"path",attr:{d:"M14 10l0 .01"},child:[]},{tag:"path",attr:{d:"M18 10l0 .01"},child:[]},{tag:"path",attr:{d:"M6 14l0 .01"},child:[]},{tag:"path",attr:{d:"M18 14l0 .01"},child:[]},{tag:"path",attr:{d:"M10 14l4 .01"},child:[]}]})(props);
}
export default TbKeyboard;
