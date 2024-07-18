import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BracketsAngle icon from Tabler Icons
 * @module
 */
export function TbBracketsAngle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 4l-5 8l5 8"}},{tag:"path",attr:{d:"M16 4l5 8l-5 8"},child:[]}]})(props);
}
export default TbBracketsAngle;
