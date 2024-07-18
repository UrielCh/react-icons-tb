import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Eyeglass icon from Tabler Icons
 * @module
 */
export function TbEyeglass(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 4h-2l-3 10"}},{tag:"path",attr:{d:"M16 4h2l3 10"},child:[]},{tag:"path",attr:{d:"M10 16l4 0"},child:[]},{tag:"path",attr:{d:"M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5"},child:[]},{tag:"path",attr:{d:"M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5"},child:[]}]})(props);
}
export default TbEyeglass;
