import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StackFront icon from Tabler Icons
 * @module
 */
export function TbStackFront(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 4l-8 4l8 4l8 -4l-8 -4",fill:"currentColor"}},{tag:"path",attr:{d:"M8 14l-4 2l8 4l8 -4l-4 -2"},child:[]},{tag:"path",attr:{d:"M8 10l-4 2l8 4l8 -4l-4 -2"},child:[]}]})(props);
}
export default TbStackFront;
