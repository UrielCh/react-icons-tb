import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MathPi icon from Tabler Icons
 * @module
 */
export function TbMathPi(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 20v-16"}},{tag:"path",attr:{d:"M17 4v16"},child:[]},{tag:"path",attr:{d:"M20 4h-16"},child:[]}]})(props);
}
export default TbMathPi;
