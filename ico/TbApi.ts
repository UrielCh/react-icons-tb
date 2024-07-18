import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Api icon from Tabler Icons
 * @module
 */
export function TbApi(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 13h5"}},{tag:"path",attr:{d:"M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3"},child:[]},{tag:"path",attr:{d:"M20 8v8"},child:[]},{tag:"path",attr:{d:"M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5"},child:[]}]})(props);
}
export default TbApi;
