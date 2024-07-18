import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sunset icon from Tabler Icons
 * @module
 */
export function TbSunset(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0"}},{tag:"path",attr:{d:"M3 21l18 0"},child:[]},{tag:"path",attr:{d:"M12 3v6l3 -3m-6 0l3 3"},child:[]}]})(props);
}
export default TbSunset;
