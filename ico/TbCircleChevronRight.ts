import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleChevronRight icon from Tabler Icons
 * @module
 */
export function TbCircleChevronRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 9l3 3l-3 3"}},{tag:"path",attr:{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0z"},child:[]}]})(props);
}
export default TbCircleChevronRight;
