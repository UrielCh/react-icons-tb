import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Fountain icon from Tabler Icons
 * @module
 */
export function TbFountain(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 16v-5a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M15 16v-5a2 2 0 1 1 4 0"},child:[]},{tag:"path",attr:{d:"M12 16v-10a3 3 0 0 1 6 0"},child:[]},{tag:"path",attr:{d:"M6 6a3 3 0 0 1 6 0"},child:[]},{tag:"path",attr:{d:"M3 16h18v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2z"},child:[]}]})(props);
}
export default TbFountain;
