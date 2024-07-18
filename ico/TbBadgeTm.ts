import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BadgeTm icon from Tabler Icons
 * @module
 */
export function TbBadgeTm(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"}},{tag:"path",attr:{d:"M6 9h4"},child:[]},{tag:"path",attr:{d:"M8 9v6"},child:[]},{tag:"path",attr:{d:"M13 15v-6l2 3l2 -3v6"},child:[]}]})(props);
}
export default TbBadgeTm;
