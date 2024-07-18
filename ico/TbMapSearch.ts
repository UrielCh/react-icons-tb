import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MapSearch icon from Tabler Icons
 * @module
 */
export function TbMapSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"}},{tag:"path",attr:{d:"M9 4v13"},child:[]},{tag:"path",attr:{d:"M15 7v5"},child:[]},{tag:"path",attr:{d:"M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"},child:[]},{tag:"path",attr:{d:"M20.2 20.2l1.8 1.8"},child:[]}]})(props);
}
export default TbMapSearch;
