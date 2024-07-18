import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Angle icon from Tabler Icons
 * @module
 */
export function TbAngle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 19h-18l9 -15"}},{tag:"path",attr:{d:"M20.615 15.171h.015"},child:[]},{tag:"path",attr:{d:"M19.515 11.771h.015"},child:[]},{tag:"path",attr:{d:"M17.715 8.671h.015"},child:[]},{tag:"path",attr:{d:"M15.415 5.971h.015"},child:[]}]})(props);
}
export default TbAngle;
