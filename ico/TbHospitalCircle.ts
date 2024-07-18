import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HospitalCircle icon from Tabler Icons
 * @module
 */
export function TbHospitalCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 16v-8"}},{tag:"path",attr:{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"},child:[]},{tag:"path",attr:{d:"M14 16v-8"},child:[]},{tag:"path",attr:{d:"M10 12h4"},child:[]}]})(props);
}
export default TbHospitalCircle;
