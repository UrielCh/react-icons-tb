import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircuitResistor icon from Tabler Icons
 * @module
 */
export function TbCircuitResistor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 12h2l2 -5l3 10l3 -10l3 10l3 -10l1.5 5h2.5"}}]})(props);
}
export default TbCircuitResistor;
