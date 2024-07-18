import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowsJoin icon from Tabler Icons
 * @module
 */
export function TbArrowsJoin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7h5l3.5 5h9.5"}},{tag:"path",attr:{d:"M3 17h5l3.495 -5"},child:[]},{tag:"path",attr:{d:"M18 15l3 -3l-3 -3"},child:[]}]})(props);
}
export default TbArrowsJoin;
