import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * NavigationNorth icon from Tabler Icons
 * @module
 */
export function TbNavigationNorth(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21l-4 -8l-4 8l4 -2z"}},{tag:"path",attr:{d:"M10 9v-6l4 6v-6"},child:[]}]})(props);
}
export default TbNavigationNorth;
