import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircuitInductor icon from Tabler Icons
 * @module
 */
export function TbCircuitInductor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 14h3v-2a2 2 0 1 1 4 0v2v-1.5a2.5 2.5 0 1 1 5 0v1.5v-1.5a2.5 2.5 0 1 1 5 0v1.5h3"}}]})(props);
}
export default TbCircuitInductor;
