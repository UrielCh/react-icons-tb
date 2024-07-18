import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Tools icon from Tabler Icons
 * @module
 */
export function TbTools(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"}},{tag:"path",attr:{d:"M14.5 5.5l4 4"},child:[]},{tag:"path",attr:{d:"M12 8l-5 -5l-4 4l5 5"},child:[]},{tag:"path",attr:{d:"M7 8l-1.5 1.5"},child:[]},{tag:"path",attr:{d:"M16 12l5 5l-4 4l-5 -5"},child:[]},{tag:"path",attr:{d:"M16 17l-1.5 1.5"},child:[]}]})(props);
}
export default TbTools;
