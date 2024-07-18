import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Txt icon from Tabler Icons
 * @module
 */
export function TbTxt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 8h4"}},{tag:"path",attr:{d:"M5 8v8"},child:[]},{tag:"path",attr:{d:"M17 8h4"},child:[]},{tag:"path",attr:{d:"M19 8v8"},child:[]},{tag:"path",attr:{d:"M10 8l4 8"},child:[]},{tag:"path",attr:{d:"M10 16l4 -8"},child:[]}]})(props);
}
export default TbTxt;
