import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * EqualDouble icon from Tabler Icons
 * @module
 */
export function TbEqualDouble(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 10h7"}},{tag:"path",attr:{d:"M3 14h7"},child:[]},{tag:"path",attr:{d:"M14 10h7"},child:[]},{tag:"path",attr:{d:"M14 14h7"},child:[]}]})(props);
}
export default TbEqualDouble;
