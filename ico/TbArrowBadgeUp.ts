import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowBadgeUp icon from Tabler Icons
 * @module
 */
export function TbArrowBadgeUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 11v6l-5 -4l-5 4v-6l5 -4z"}}]})(props);
}
export default TbArrowBadgeUp;
