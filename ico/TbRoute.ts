import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Route icon from Tabler Icons
 * @module
 */
export function TbRoute(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}},{tag:"path",attr:{d:"M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4z"},child:[]},{tag:"path",attr:{d:"M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5"},child:[]}]})(props);
}
export default TbRoute;
