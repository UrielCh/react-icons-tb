import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ce icon from Tabler Icons
 * @module
 */
export function TbCe(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 6a6 6 0 1 0 0 12"}},{tag:"path",attr:{d:"M21 6a6 6 0 1 0 0 12"},child:[]},{tag:"path",attr:{d:"M15 12h6"},child:[]}]})(props);
}
export default TbCe;
