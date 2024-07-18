import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowForward icon from Tabler Icons
 * @module
 */
export function TbArrowForward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1"}}]})(props);
}
export default TbArrowForward;
