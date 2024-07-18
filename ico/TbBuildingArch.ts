import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BuildingArch icon from Tabler Icons
 * @module
 */
export function TbBuildingArch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 21l18 0"}},{tag:"path",attr:{d:"M4 21v-15a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v15"},child:[]},{tag:"path",attr:{d:"M9 21v-8a3 3 0 0 1 6 0v8"},child:[]}]})(props);
}
export default TbBuildingArch;
