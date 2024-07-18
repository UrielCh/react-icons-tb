import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowZigZag icon from Tabler Icons
 * @module
 */
export function TbArrowZigZag(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 20v-10l10 6v-12"}},{tag:"path",attr:{d:"M13 7l3 -3l3 3"},child:[]}]})(props);
}
export default TbArrowZigZag;
