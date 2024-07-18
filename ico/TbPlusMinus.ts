import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlusMinus icon from Tabler Icons
 * @module
 */
export function TbPlusMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 7h6"}},{tag:"path",attr:{d:"M7 4v6"},child:[]},{tag:"path",attr:{d:"M20 18h-6"},child:[]},{tag:"path",attr:{d:"M5 19l14 -14"},child:[]}]})(props);
}
export default TbPlusMinus;
