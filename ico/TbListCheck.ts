import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ListCheck icon from Tabler Icons
 * @module
 */
export function TbListCheck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3.5 5.5l1.5 1.5l2.5 -2.5"}},{tag:"path",attr:{d:"M3.5 11.5l1.5 1.5l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M3.5 17.5l1.5 1.5l2.5 -2.5"},child:[]},{tag:"path",attr:{d:"M11 6l9 0"},child:[]},{tag:"path",attr:{d:"M11 12l9 0"},child:[]},{tag:"path",attr:{d:"M11 18l9 0"},child:[]}]})(props);
}
export default TbListCheck;
