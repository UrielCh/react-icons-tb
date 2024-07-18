import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Podium icon from Tabler Icons
 * @module
 */
export function TbPodium(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 8h14l-.621 2.485a2 2 0 0 1 -1.94 1.515h-8.878a2 2 0 0 1 -1.94 -1.515l-.621 -2.485z"}},{tag:"path",attr:{d:"M7 8v-2a3 3 0 0 1 3 -3"},child:[]},{tag:"path",attr:{d:"M8 12l1 9"},child:[]},{tag:"path",attr:{d:"M16 12l-1 9"},child:[]},{tag:"path",attr:{d:"M7 21h10"},child:[]}]})(props);
}
export default TbPodium;
