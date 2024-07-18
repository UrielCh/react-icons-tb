import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircuitCapacitor icon from Tabler Icons
 * @module
 */
export function TbCircuitCapacitor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 12h-8"}},{tag:"path",attr:{d:"M2 12h8"},child:[]},{tag:"path",attr:{d:"M10 7v10"},child:[]},{tag:"path",attr:{d:"M14 7v10"},child:[]}]})(props);
}
export default TbCircuitCapacitor;
