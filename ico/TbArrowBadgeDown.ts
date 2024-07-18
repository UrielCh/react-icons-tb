import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowBadgeDown icon from Tabler Icons
 * @module
 */
export function TbArrowBadgeDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 13v-6l-5 4l-5 -4v6l5 4z"}}]})(props);
}
export default TbArrowBadgeDown;
