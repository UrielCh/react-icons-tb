import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * RouteSquare icon from Tabler Icons
 * @module
 */
export function TbRouteSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 17h4v4h-4z"}},{tag:"path",attr:{d:"M17 3h4v4h-4z"},child:[]},{tag:"path",attr:{d:"M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5"},child:[]}]})(props);
}
export default TbRouteSquare;
