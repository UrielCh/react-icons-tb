import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowBadgeLeft icon from Tabler Icons
 * @module
 */
export function TbArrowBadgeLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 17h6l-4 -5l4 -5h-6l-4 5z"}}]})(props);
}
export default TbArrowBadgeLeft;
