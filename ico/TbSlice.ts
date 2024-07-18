import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Slice icon from Tabler Icons
 * @module
 */
export function TbSlice(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 19l15 -15l3 3l-6 6l2 2a14 14 0 0 1 -14 4"}}]})(props);
}
export default TbSlice;
