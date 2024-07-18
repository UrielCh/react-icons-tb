import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * EqualNot icon from Tabler Icons
 * @module
 */
export function TbEqualNot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 10h14"}},{tag:"path",attr:{d:"M5 14h14"},child:[]},{tag:"path",attr:{d:"M5 19l14 -14"},child:[]}]})(props);
}
export default TbEqualNot;
