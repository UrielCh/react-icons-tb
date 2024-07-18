import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Stack2 icon from Tabler Icons
 * @module
 */
export function TbStack2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 4l-8 4l8 4l8 -4l-8 -4"}},{tag:"path",attr:{d:"M4 12l8 4l8 -4"},child:[]},{tag:"path",attr:{d:"M4 16l8 4l8 -4"},child:[]}]})(props);
}
export default TbStack2;
