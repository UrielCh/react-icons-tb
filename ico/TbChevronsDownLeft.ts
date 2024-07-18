import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChevronsDownLeft icon from Tabler Icons
 * @module
 */
export function TbChevronsDownLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 5v8h8"}},{tag:"path",attr:{d:"M7 9v8h8"},child:[]}]})(props);
}
export default TbChevronsDownLeft;
