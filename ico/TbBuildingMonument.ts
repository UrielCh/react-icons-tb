import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BuildingMonument icon from Tabler Icons
 * @module
 */
export function TbBuildingMonument(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 18l2 -13l2 -2l2 2l2 13"}},{tag:"path",attr:{d:"M5 21v-3h14v3"},child:[]},{tag:"path",attr:{d:"M3 21l18 0"},child:[]}]})(props);
}
export default TbBuildingMonument;
