import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FlagX icon from Tabler Icons
 * @module
 */
export function TbFlagX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13.533 15.028a4.988 4.988 0 0 1 -1.533 -1.028a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v8.5"}},{tag:"path",attr:{d:"M5 21v-7"},child:[]},{tag:"path",attr:{d:"M22 22l-5 -5"},child:[]},{tag:"path",attr:{d:"M17 22l5 -5"},child:[]}]})(props);
}
export default TbFlagX;
