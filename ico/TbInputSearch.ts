import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * InputSearch icon from Tabler Icons
 * @module
 */
export function TbInputSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 11v-2a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h5"}},{tag:"path",attr:{d:"M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"},child:[]},{tag:"path",attr:{d:"M20.2 20.2l1.8 1.8"},child:[]}]})(props);
}
export default TbInputSearch;
