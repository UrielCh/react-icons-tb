import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AxisY icon from Tabler Icons
 * @module
 */
export function TbAxisY(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 20h-.01"}},{tag:"path",attr:{d:"M15 20h-.01"},child:[]},{tag:"path",attr:{d:"M19 20h-.01"},child:[]},{tag:"path",attr:{d:"M4 7l3 -3l3 3"},child:[]},{tag:"path",attr:{d:"M7 20v-16"},child:[]}]})(props);
}
export default TbAxisY;
