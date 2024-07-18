import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Smoking icon from Tabler Icons
 * @module
 */
export function TbSmoking(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 13m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"}},{tag:"path",attr:{d:"M8 13l0 4"},child:[]},{tag:"path",attr:{d:"M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5"},child:[]}]})(props);
}
export default TbSmoking;
