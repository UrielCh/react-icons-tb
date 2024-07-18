import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HomeX icon from Tabler Icons
 * @module
 */
export function TbHomeX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 13.4v-1.4h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5"}},{tag:"path",attr:{d:"M9 21v-6a2 2 0 0 1 2 -2h2c.402 0 .777 .119 1.091 .323"},child:[]},{tag:"path",attr:{d:"M21.5 21.5l-5 -5"},child:[]},{tag:"path",attr:{d:"M16.5 21.5l5 -5"},child:[]}]})(props);
}
export default TbHomeX;
