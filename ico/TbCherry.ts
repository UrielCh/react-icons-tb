import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cherry icon from Tabler Icons
 * @module
 */
export function TbCherry(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7.5 16.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0"}},{tag:"path",attr:{d:"M17 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"},child:[]},{tag:"path",attr:{d:"M9 13c.366 -2 1.866 -3.873 4.5 -5.6"},child:[]},{tag:"path",attr:{d:"M17 15c-1.333 -2.333 -2.333 -5.333 -1 -9"},child:[]},{tag:"path",attr:{d:"M5 6c3.667 -2.667 7.333 -2.667 11 0c-3.667 2.667 -7.333 2.667 -11 0"},child:[]}]})(props);
}
export default TbCherry;
