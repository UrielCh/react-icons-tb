import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChevronsUpRight icon from Tabler Icons
 * @module
 */
export function TbChevronsUpRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 7h8v8"}},{tag:"path",attr:{d:"M5 11h8v8"},child:[]}]})(props);
}
export default TbChevronsUpRight;
