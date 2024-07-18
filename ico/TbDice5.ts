import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Dice5 icon from Tabler Icons
 * @module
 */
export function TbDice5(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"}},{tag:"circle",attr:{"cx":"8.5","cy":"8.5","r":".5",fill:"currentColor"},child:[]},{tag:"circle",attr:{"cx":"15.5","cy":"8.5","r":".5",fill:"currentColor"},child:[]},{tag:"circle",attr:{"cx":"15.5","cy":"15.5","r":".5",fill:"currentColor"},child:[]},{tag:"circle",attr:{"cx":"8.5","cy":"15.5","r":".5",fill:"currentColor"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":".5",fill:"currentColor"},child:[]}]})(props);
}
export default TbDice5;
