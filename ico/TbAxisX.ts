import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AxisX icon from Tabler Icons
 * @module
 */
export function TbAxisX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 13v.01"}},{tag:"path",attr:{d:"M4 9v.01"},child:[]},{tag:"path",attr:{d:"M4 5v.01"},child:[]},{tag:"path",attr:{d:"M17 20l3 -3l-3 -3"},child:[]},{tag:"path",attr:{d:"M4 17h16"},child:[]}]})(props);
}
export default TbAxisX;
