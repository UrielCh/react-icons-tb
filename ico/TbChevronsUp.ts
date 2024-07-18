import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChevronsUp icon from Tabler Icons
 * @module
 */
export function TbChevronsUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 11l5 -5l5 5"}},{tag:"path",attr:{d:"M7 17l5 -5l5 5"},child:[]}]})(props);
}
export default TbChevronsUp;
