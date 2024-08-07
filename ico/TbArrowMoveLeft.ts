import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowMoveLeft icon from Tabler Icons
 * @module
 */
export function TbArrowMoveLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 12h-10"}},{tag:"path",attr:{d:"M6 15l-3 -3l3 -3"},child:[]},{tag:"path",attr:{d:"M17 12a2 2 0 1 1 4 0a2 2 0 0 1 -4 0z"},child:[]}]})(props);
}
export default TbArrowMoveLeft;
