import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Gift icon from Tabler Icons
 * @module
 */
export function TbGift(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"}},{tag:"path",attr:{d:"M12 8l0 13"},child:[]},{tag:"path",attr:{d:"M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7"},child:[]},{tag:"path",attr:{d:"M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5"},child:[]}]})(props);
}
export default TbGift;
