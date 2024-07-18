import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Pin icon from Tabler Icons
 * @module
 */
export function TbPin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4"}},{tag:"path",attr:{d:"M9 15l-4.5 4.5"},child:[]},{tag:"path",attr:{d:"M14.5 4l5.5 5.5"},child:[]}]})(props);
}
export default TbPin;
