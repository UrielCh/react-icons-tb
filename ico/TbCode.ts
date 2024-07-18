import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Code icon from Tabler Icons
 * @module
 */
export function TbCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 8l-4 4l4 4"}},{tag:"path",attr:{d:"M17 8l4 4l-4 4"},child:[]},{tag:"path",attr:{d:"M14 4l-4 16"},child:[]}]})(props);
}
export default TbCode;
