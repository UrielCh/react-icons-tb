import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Grid3X3 icon from Tabler Icons
 * @module
 */
export function TbGrid3X3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 8h18"}},{tag:"path",attr:{d:"M3 16h18"},child:[]},{tag:"path",attr:{d:"M8 3v18"},child:[]},{tag:"path",attr:{d:"M16 3v18"},child:[]}]})(props);
}
export default TbGrid3X3;
