import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Pills icon from Tabler Icons
 * @module
 */
export function TbPills(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}},{tag:"path",attr:{d:"M17 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"},child:[]},{tag:"path",attr:{d:"M4.5 4.5l7 7"},child:[]},{tag:"path",attr:{d:"M19.5 14.5l-5 5"},child:[]}]})(props);
}
export default TbPills;
