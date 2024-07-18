import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpLeft icon from Tabler Icons
 * @module
 */
export function TbArrowUpLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 7l10 10"}},{tag:"path",attr:{d:"M16 7l-9 0l0 9"},child:[]}]})(props);
}
export default TbArrowUpLeft;
