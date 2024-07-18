import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Zeppelin icon from Tabler Icons
 * @module
 */
export function TbZeppelin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13.5 4c4.694 0 8.5 2.686 8.5 6s-3.806 6 -8.5 6c-2.13 0 -4.584 -.926 -7.364 -2.777l-2.136 1.777v-3.33a46.07 46.07 0 0 1 -2 -1.67a46.07 46.07 0 0 1 2 -1.67v-3.33l2.135 1.778c2.78 -1.852 5.235 -2.778 7.365 -2.778z"}},{tag:"path",attr:{d:"M10 15.5v4.5h6v-4"},child:[]}]})(props);
}
export default TbZeppelin;
