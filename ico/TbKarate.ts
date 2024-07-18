import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Karate icon from Tabler Icons
 * @module
 */
export function TbKarate(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}},{tag:"path",attr:{d:"M3 9l4.5 1l3 2.5"},child:[]},{tag:"path",attr:{d:"M13 21v-8l3 -5.5"},child:[]},{tag:"path",attr:{d:"M8 4.5l4 2l4 1l4 3.5l-2 3.5"},child:[]}]})(props);
}
export default TbKarate;
