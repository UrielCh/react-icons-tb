import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bed icon from Tabler Icons
 * @module
 */
export function TbBed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M22 17v-3h-20"},child:[]},{tag:"path",attr:{d:"M2 8v9"},child:[]},{tag:"path",attr:{d:"M12 14h10v-2a3 3 0 0 0 -3 -3h-7v5z"},child:[]}]})(props);
}
export default TbBed;
