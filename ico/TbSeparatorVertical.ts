import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SeparatorVertical icon from Tabler Icons
 * @module
 */
export function TbSeparatorVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 4l0 16"}},{tag:"path",attr:{d:"M8 8l-4 4l4 4"},child:[]},{tag:"path",attr:{d:"M16 16l4 -4l-4 -4"},child:[]}]})(props);
}
export default TbSeparatorVertical;
