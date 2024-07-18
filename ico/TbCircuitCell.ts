import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircuitCell icon from Tabler Icons
 * @module
 */
export function TbCircuitCell(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 12h8"}},{tag:"path",attr:{d:"M14 12h8"},child:[]},{tag:"path",attr:{d:"M10 5v14"},child:[]},{tag:"path",attr:{d:"M14 9v6"},child:[]}]})(props);
}
export default TbCircuitCell;
