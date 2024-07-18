import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowForwardUp icon from Tabler Icons
 * @module
 */
export function TbArrowForwardUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 14l4 -4l-4 -4"}},{tag:"path",attr:{d:"M19 10h-11a4 4 0 1 0 0 8h1"},child:[]}]})(props);
}
export default TbArrowForwardUp;
