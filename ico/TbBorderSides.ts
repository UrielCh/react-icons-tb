import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BorderSides icon from Tabler Icons
 * @module
 */
export function TbBorderSides(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 8v8"}},{tag:"path",attr:{d:"M20 16v-8"},child:[]},{tag:"path",attr:{d:"M8 4h8"},child:[]},{tag:"path",attr:{d:"M8 20h8"},child:[]}]})(props);
}
export default TbBorderSides;
