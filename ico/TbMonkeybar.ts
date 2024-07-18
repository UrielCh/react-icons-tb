import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Monkeybar icon from Tabler Icons
 * @module
 */
export function TbMonkeybar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 21v-15l5 -3l5 3v15"}},{tag:"path",attr:{d:"M8 21v-7"},child:[]},{tag:"path",attr:{d:"M3 14h10"},child:[]},{tag:"path",attr:{d:"M6 10a2 2 0 1 1 4 0"},child:[]},{tag:"path",attr:{d:"M13 13c6 0 3 8 8 8"},child:[]}]})(props);
}
export default TbMonkeybar;
