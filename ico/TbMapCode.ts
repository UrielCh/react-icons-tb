import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MapCode icon from Tabler Icons
 * @module
 */
export function TbMapCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v9"}},{tag:"path",attr:{d:"M9 4v13"},child:[]},{tag:"path",attr:{d:"M15 7v6.5"},child:[]},{tag:"path",attr:{d:"M20 21l2 -2l-2 -2"},child:[]},{tag:"path",attr:{d:"M17 17l-2 2l2 2"},child:[]}]})(props);
}
export default TbMapCode;
