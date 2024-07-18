import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TicTac icon from Tabler Icons
 * @module
 */
export function TbTicTac(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M3 12h18"},child:[]},{tag:"path",attr:{d:"M12 3v18"},child:[]},{tag:"path",attr:{d:"M4 16l4 4"},child:[]},{tag:"path",attr:{d:"M4 20l4 -4"},child:[]},{tag:"path",attr:{d:"M16 4l4 4"},child:[]},{tag:"path",attr:{d:"M16 8l4 -4"},child:[]},{tag:"path",attr:{d:"M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]}]})(props);
}
export default TbTicTac;
