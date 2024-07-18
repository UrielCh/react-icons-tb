import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BadgeOff icon from Tabler Icons
 * @module
 */
export function TbBadgeOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 7v10l5 3l5 -3m0 -4v-9l-5 3l-2.496 -1.497"}},{tag:"path",attr:{d:"M3 3l18 18"},child:[]}]})(props);
}
export default TbBadgeOff;
