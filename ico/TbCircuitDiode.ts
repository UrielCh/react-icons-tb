import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircuitDiode icon from Tabler Icons
 * @module
 */
export function TbCircuitDiode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 12h-6"}},{tag:"path",attr:{d:"M2 12h6"},child:[]},{tag:"path",attr:{d:"M8 7l8 5l-8 5z"},child:[]},{tag:"path",attr:{d:"M16 7v10"},child:[]}]})(props);
}
export default TbCircuitDiode;
