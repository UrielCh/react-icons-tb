import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowsSort icon from Tabler Icons
 * @module
 */
export function TbArrowsSort(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l4 -4l4 4m-4 -4v14"}},{tag:"path",attr:{d:"M21 15l-4 4l-4 -4m4 4v-14"},child:[]}]})(props);
}
export default TbArrowsSort;
