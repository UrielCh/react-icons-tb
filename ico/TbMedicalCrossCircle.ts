import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MedicalCrossCircle icon from Tabler Icons
 * @module
 */
export function TbMedicalCrossCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}},{tag:"path",attr:{d:"M12 8v8"},child:[]},{tag:"path",attr:{d:"M15.5 10l-7 4"},child:[]},{tag:"path",attr:{d:"M15.5 14l-7 -4"},child:[]}]})(props);
}
export default TbMedicalCrossCircle;
