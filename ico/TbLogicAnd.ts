import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LogicAnd icon from Tabler Icons
 * @module
 */
export function TbLogicAnd(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 12h-5"}},{tag:"path",attr:{d:"M2 9h5"},child:[]},{tag:"path",attr:{d:"M2 15h5"},child:[]},{tag:"path",attr:{d:"M9 5c6 0 8 3.5 8 7s-2 7 -8 7h-2v-14h2z"},child:[]}]})(props);
}
export default TbLogicAnd;
