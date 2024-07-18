import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TrafficCone icon from Tabler Icons
 * @module
 */
export function TbTrafficCone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 20l16 0"}},{tag:"path",attr:{d:"M9.4 10l5.2 0"},child:[]},{tag:"path",attr:{d:"M7.8 15l8.4 0"},child:[]},{tag:"path",attr:{d:"M6 20l5 -15h2l5 15"},child:[]}]})(props);
}
export default TbTrafficCone;
