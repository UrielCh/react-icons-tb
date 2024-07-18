import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DirectionHorizontal icon from Tabler Icons
 * @module
 */
export function TbDirectionHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 9l-3 3l3 3"}},{tag:"path",attr:{d:"M14 9l3 3l-3 3"},child:[]}]})(props);
}
export default TbDirectionHorizontal;
