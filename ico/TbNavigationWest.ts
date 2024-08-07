import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * NavigationWest icon from Tabler Icons
 * @module
 */
export function TbNavigationWest(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 3l1 6l2 -3.75l2 3.75l1 -6"}},{tag:"path",attr:{d:"M16 21l-4 -8l-4 8l4 -2z"},child:[]}]})(props);
}
export default TbNavigationWest;
