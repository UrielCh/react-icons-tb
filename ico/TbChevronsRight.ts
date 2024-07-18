import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChevronsRight icon from Tabler Icons
 * @module
 */
export function TbChevronsRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 7l5 5l-5 5"}},{tag:"path",attr:{d:"M13 7l5 5l-5 5"},child:[]}]})(props);
}
export default TbChevronsRight;
