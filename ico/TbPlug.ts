import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Plug icon from Tabler Icons
 * @module
 */
export function TbPlug(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054z"}},{tag:"path",attr:{d:"M4 20l3.5 -3.5"},child:[]},{tag:"path",attr:{d:"M15 4l-3.5 3.5"},child:[]},{tag:"path",attr:{d:"M20 9l-3.5 3.5"},child:[]}]})(props);
}
export default TbPlug;
