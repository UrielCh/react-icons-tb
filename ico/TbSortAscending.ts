import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SortAscending icon from Tabler Icons
 * @module
 */
export function TbSortAscending(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 6l7 0"}},{tag:"path",attr:{d:"M4 12l7 0"},child:[]},{tag:"path",attr:{d:"M4 18l9 0"},child:[]},{tag:"path",attr:{d:"M15 9l3 -3l3 3"},child:[]},{tag:"path",attr:{d:"M18 6l0 12"},child:[]}]})(props);
}
export default TbSortAscending;
