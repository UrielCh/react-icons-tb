import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Campfire icon from Tabler Icons
 * @module
 */
export function TbCampfire(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 21l16 -4"}},{tag:"path",attr:{d:"M20 21l-16 -4"},child:[]},{tag:"path",attr:{d:"M12 15a4 4 0 0 0 4 -4c0 -3 -2 -3 -2 -8c-4 2 -6 5 -6 8a4 4 0 0 0 4 4z"},child:[]}]})(props);
}
export default TbCampfire;
