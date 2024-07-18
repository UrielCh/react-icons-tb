import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BorderCornerSquare icon from Tabler Icons
 * @module
 */
export function TbBorderCornerSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 20v-15a1 1 0 0 1 1 -1h15"}}]})(props);
}
export default TbBorderCornerSquare;
