import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BorderCornerPill icon from Tabler Icons
 * @module
 */
export function TbBorderCornerPill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 20v-5c0 -6.075 4.925 -11 11 -11h5"}}]})(props);
}
export default TbBorderCornerPill;
