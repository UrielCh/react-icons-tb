import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Rainbow icon from Tabler Icons
 * @module
 */
export function TbRainbow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 17c0 -5.523 -4.477 -10 -10 -10s-10 4.477 -10 10"}},{tag:"path",attr:{d:"M18 17a6 6 0 1 0 -12 0"},child:[]},{tag:"path",attr:{d:"M14 17a2 2 0 1 0 -4 0"},child:[]}]})(props);
}
export default TbRainbow;
