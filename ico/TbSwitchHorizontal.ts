import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SwitchHorizontal icon from Tabler Icons
 * @module
 */
export function TbSwitchHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 3l4 4l-4 4"}},{tag:"path",attr:{d:"M10 7l10 0"},child:[]},{tag:"path",attr:{d:"M8 13l-4 4l4 4"},child:[]},{tag:"path",attr:{d:"M4 17l9 0"},child:[]}]})(props);
}
export default TbSwitchHorizontal;
