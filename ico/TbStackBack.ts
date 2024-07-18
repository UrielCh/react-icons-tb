import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StackBack icon from Tabler Icons
 * @module
 */
export function TbStackBack(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 8l8 4l8 -4l-8 -4z"}},{tag:"path",attr:{d:"M12 16l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M8 10l-4 2l4 2m8 0l4 -2l-4 -2"},child:[]}]})(props);
}
export default TbStackBack;
