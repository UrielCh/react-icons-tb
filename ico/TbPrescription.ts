import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Prescription icon from Tabler Icons
 * @module
 */
export function TbPrescription(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 19v-16h4.5a4.5 4.5 0 1 1 0 9h-4.5"}},{tag:"path",attr:{d:"M19 21l-9 -9"},child:[]},{tag:"path",attr:{d:"M13 21l6 -6"},child:[]}]})(props);
}
export default TbPrescription;
