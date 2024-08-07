import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Click icon from Tabler Icons
 * @module
 */
export function TbClick(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12l3 0"}},{tag:"path",attr:{d:"M12 3l0 3"},child:[]},{tag:"path",attr:{d:"M7.8 7.8l-2.2 -2.2"},child:[]},{tag:"path",attr:{d:"M16.2 7.8l2.2 -2.2"},child:[]},{tag:"path",attr:{d:"M7.8 16.2l-2.2 2.2"},child:[]},{tag:"path",attr:{d:"M12 12l9 3l-4 2l-2 4l-3 -9"},child:[]}]})(props);
}
export default TbClick;
