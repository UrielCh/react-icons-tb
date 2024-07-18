import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FrameOff icon from Tabler Icons
 * @module
 */
export function TbFrameOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 7h3m4 0h9"}},{tag:"path",attr:{d:"M4 17h13"},child:[]},{tag:"path",attr:{d:"M7 7v13"},child:[]},{tag:"path",attr:{d:"M17 4v9m0 4v3"},child:[]},{tag:"path",attr:{d:"M3 3l18 18"},child:[]}]})(props);
}
export default TbFrameOff;
