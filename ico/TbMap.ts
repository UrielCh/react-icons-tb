import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Map icon from Tabler Icons
 * @module
 */
export function TbMap(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13"}},{tag:"path",attr:{d:"M9 4v13"},child:[]},{tag:"path",attr:{d:"M15 7v13"},child:[]}]})(props);
}
export default TbMap;
