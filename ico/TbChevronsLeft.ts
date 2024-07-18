import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChevronsLeft icon from Tabler Icons
 * @module
 */
export function TbChevronsLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 7l-5 5l5 5"}},{tag:"path",attr:{d:"M17 7l-5 5l5 5"},child:[]}]})(props);
}
export default TbChevronsLeft;
