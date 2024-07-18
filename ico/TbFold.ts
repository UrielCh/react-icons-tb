import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Fold icon from Tabler Icons
 * @module
 */
export function TbFold(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3v6l3 -3m-6 0l3 3"}},{tag:"path",attr:{d:"M12 21v-6l3 3m-6 0l3 -3"},child:[]},{tag:"path",attr:{d:"M4 12l1 0"},child:[]},{tag:"path",attr:{d:"M9 12l1 0"},child:[]},{tag:"path",attr:{d:"M14 12l1 0"},child:[]},{tag:"path",attr:{d:"M19 12l1 0"},child:[]}]})(props);
}
export default TbFold;
