import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * World icon from Tabler Icons
 * @module
 */
export function TbWorld(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}},{tag:"path",attr:{d:"M3.6 9h16.8"},child:[]},{tag:"path",attr:{d:"M3.6 15h16.8"},child:[]},{tag:"path",attr:{d:"M11.5 3a17 17 0 0 0 0 18"},child:[]},{tag:"path",attr:{d:"M12.5 3a17 17 0 0 1 0 18"},child:[]}]})(props);
}
export default TbWorld;
