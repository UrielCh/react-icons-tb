import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Badge3D icon from Tabler Icons
 * @module
 */
export function TbBadge3D(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"}},{tag:"path",attr:{d:"M7 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5"},child:[]},{tag:"path",attr:{d:"M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z"},child:[]}]})(props);
}
export default TbBadge3D;
