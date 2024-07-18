import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Badges icon from Tabler Icons
 * @module
 */
export function TbBadges(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 17v-4l-5 3l-5 -3v4l5 3z"}},{tag:"path",attr:{d:"M17 8v-4l-5 3l-5 -3v4l5 3z"},child:[]}]})(props);
}
export default TbBadges;
