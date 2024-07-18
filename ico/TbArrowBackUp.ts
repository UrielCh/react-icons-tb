import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowBackUp icon from Tabler Icons
 * @module
 */
export function TbArrowBackUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 14l-4 -4l4 -4"}},{tag:"path",attr:{d:"M5 10h11a4 4 0 1 1 0 8h-1"},child:[]}]})(props);
}
export default TbArrowBackUp;
