import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * NavigationEast icon from Tabler Icons
 * @module
 */
export function TbNavigationEast(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3h-4v6h4"}},{tag:"path",attr:{d:"M10 6h2.5"},child:[]},{tag:"path",attr:{d:"M16 21l-4 -8l-4 8l4 -2z"},child:[]}]})(props);
}
export default TbNavigationEast;
