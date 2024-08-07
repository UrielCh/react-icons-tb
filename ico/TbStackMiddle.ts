import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StackMiddle icon from Tabler Icons
 * @module
 */
export function TbStackMiddle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 10l4 -2l-8 -4l-8 4l4 2"}},{tag:"path",attr:{d:"M12 12l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M8 14l-4 2l8 4l8 -4l-4 -2"},child:[]}]})(props);
}
export default TbStackMiddle;
