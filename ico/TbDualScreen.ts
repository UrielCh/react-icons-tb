import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DualScreen icon from Tabler Icons
 * @module
 */
export function TbDualScreen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 4l8 3v15l-8 -3z"}},{tag:"path",attr:{d:"M13 19h6v-15h-14"},child:[]}]})(props);
}
export default TbDualScreen;
