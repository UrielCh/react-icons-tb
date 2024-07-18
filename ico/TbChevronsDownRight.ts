import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChevronsDownRight icon from Tabler Icons
 * @module
 */
export function TbChevronsDownRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 5v8h-8"}},{tag:"path",attr:{d:"M17 9v8h-8"},child:[]}]})(props);
}
export default TbChevronsDownRight;
