import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlayCard icon from Tabler Icons
 * @module
 */
export function TbPlayCard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z"}},{tag:"path",attr:{d:"M8 6h.01"},child:[]},{tag:"path",attr:{d:"M16 18h.01"},child:[]},{tag:"path",attr:{d:"M12 16l-3 -4l3 -4l3 4z"},child:[]}]})(props);
}
export default TbPlayCard;
