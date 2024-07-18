import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Swords icon from Tabler Icons
 * @module
 */
export function TbSwords(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 3v5l-11 9l-4 4l-3 -3l4 -4l9 -11z"}},{tag:"path",attr:{d:"M5 13l6 6"},child:[]},{tag:"path",attr:{d:"M14.32 17.32l3.68 3.68l3 -3l-3.365 -3.365"},child:[]},{tag:"path",attr:{d:"M10 5.5l-2 -2.5h-5v5l3 2.5"},child:[]}]})(props);
}
export default TbSwords;
