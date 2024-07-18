import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StackPop icon from Tabler Icons
 * @module
 */
export function TbStackPop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 9.5l-3 1.5l8 4l8 -4l-3 -1.5"}},{tag:"path",attr:{d:"M4 15l8 4l8 -4"},child:[]},{tag:"path",attr:{d:"M12 11v-7"},child:[]},{tag:"path",attr:{d:"M9 7l3 -3l3 3"},child:[]}]})(props);
}
export default TbStackPop;
