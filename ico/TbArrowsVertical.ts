import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowsVertical icon from Tabler Icons
 * @module
 */
export function TbArrowsVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 7l4 -4l4 4"}},{tag:"path",attr:{d:"M8 17l4 4l4 -4"},child:[]},{tag:"path",attr:{d:"M12 3l0 18"},child:[]}]})(props);
}
export default TbArrowsVertical;
