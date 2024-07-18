import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Massage icon from Tabler Icons
 * @module
 */
export function TbMassage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}},{tag:"path",attr:{d:"M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M4 22l4 -2v-3h12"},child:[]},{tag:"path",attr:{d:"M11 20h9"},child:[]},{tag:"path",attr:{d:"M8 14l3 -2l1 -4c3 1 3 4 3 6"},child:[]}]})(props);
}
export default TbMassage;
