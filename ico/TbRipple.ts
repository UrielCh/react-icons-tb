import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ripple icon from Tabler Icons
 * @module
 */
export function TbRipple(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7c3 -2 6 -2 9 0s6 2 9 0"}},{tag:"path",attr:{d:"M3 17c3 -2 6 -2 9 0s6 2 9 0"},child:[]},{tag:"path",attr:{d:"M3 12c3 -2 6 -2 9 0s6 2 9 0"},child:[]}]})(props);
}
export default TbRipple;
