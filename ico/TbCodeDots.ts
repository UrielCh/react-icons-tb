import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CodeDots icon from Tabler Icons
 * @module
 */
export function TbCodeDots(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 12h.01"}},{tag:"path",attr:{d:"M12 12h.01"},child:[]},{tag:"path",attr:{d:"M9 12h.01"},child:[]},{tag:"path",attr:{d:"M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2"},child:[]},{tag:"path",attr:{d:"M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2"},child:[]}]})(props);
}
export default TbCodeDots;
