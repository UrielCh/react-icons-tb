import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Hexagons icon from Tabler Icons
 * @module
 */
export function TbHexagons(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 18v-5l4 -2l4 2v5l-4 2z"}},{tag:"path",attr:{d:"M8 11v-5l4 -2l4 2v5"},child:[]},{tag:"path",attr:{d:"M12 13l4 -2l4 2v5l-4 2l-4 -2"},child:[]}]})(props);
}
export default TbHexagons;
