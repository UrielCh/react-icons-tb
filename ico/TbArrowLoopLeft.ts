import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowLoopLeft icon from Tabler Icons
 * @module
 */
export function TbArrowLoopLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 21v-13a4 4 0 1 1 4 4h-13"}},{tag:"path",attr:{d:"M8 16l-4 -4l4 -4"},child:[]}]})(props);
}
export default TbArrowLoopLeft;
