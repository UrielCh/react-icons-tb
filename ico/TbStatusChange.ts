import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StatusChange icon from Tabler Icons
 * @module
 */
export function TbStatusChange(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]},{tag:"path",attr:{d:"M6 12v-2a6 6 0 1 1 12 0v2"},child:[]},{tag:"path",attr:{d:"M15 9l3 3l3 -3"},child:[]}]})(props);
}
export default TbStatusChange;
