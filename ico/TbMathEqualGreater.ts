import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MathEqualGreater icon from Tabler Icons
 * @module
 */
export function TbMathEqualGreater(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 18l14 -4"}},{tag:"path",attr:{d:"M5 14l14 -4l-14 -4"},child:[]}]})(props);
}
export default TbMathEqualGreater;
