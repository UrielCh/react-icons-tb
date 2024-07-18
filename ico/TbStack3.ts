import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Stack3 icon from Tabler Icons
 * @module
 */
export function TbStack3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2l-8 4l8 4l8 -4l-8 -4"}},{tag:"path",attr:{d:"M4 10l8 4l8 -4"},child:[]},{tag:"path",attr:{d:"M4 18l8 4l8 -4"},child:[]},{tag:"path",attr:{d:"M4 14l8 4l8 -4"},child:[]}]})(props);
}
export default TbStack3;
