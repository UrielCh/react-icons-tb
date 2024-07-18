import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SwitchVertical icon from Tabler Icons
 * @module
 */
export function TbSwitchVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 8l4 -4l4 4"}},{tag:"path",attr:{d:"M7 4l0 9"},child:[]},{tag:"path",attr:{d:"M13 16l4 4l4 -4"},child:[]},{tag:"path",attr:{d:"M17 10l0 10"},child:[]}]})(props);
}
export default TbSwitchVertical;
