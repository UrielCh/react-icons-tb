import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ladder icon from Tabler Icons
 * @module
 */
export function TbLadder(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 3v18"}},{tag:"path",attr:{d:"M16 3v18"},child:[]},{tag:"path",attr:{d:"M8 14h8"},child:[]},{tag:"path",attr:{d:"M8 10h8"},child:[]},{tag:"path",attr:{d:"M8 6h8"},child:[]},{tag:"path",attr:{d:"M8 18h8"},child:[]}]})(props);
}
export default TbLadder;
