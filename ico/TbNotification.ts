import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Notification icon from Tabler Icons
 * @module
 */
export function TbNotification(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 6h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"}},{tag:"path",attr:{d:"M17 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"},child:[]}]})(props);
}
export default TbNotification;
