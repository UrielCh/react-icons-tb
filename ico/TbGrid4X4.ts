import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Grid4X4 icon from Tabler Icons
 * @module
 */
export function TbGrid4X4(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"}},{tag:"path",attr:{d:"M3 12h18"},child:[]},{tag:"path",attr:{d:"M3 18h18"},child:[]},{tag:"path",attr:{d:"M6 3v18"},child:[]},{tag:"path",attr:{d:"M12 3v18"},child:[]},{tag:"path",attr:{d:"M18 3v18"},child:[]}]})(props);
}
export default TbGrid4X4;
