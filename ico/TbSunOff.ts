import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SunOff icon from Tabler Icons
 * @module
 */
export function TbSunOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 3l18 18"}},{tag:"path",attr:{d:"M16 12a4 4 0 0 0 -4 -4m-2.834 1.177a4 4 0 0 0 5.66 5.654"},child:[]},{tag:"path",attr:{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"},child:[]}]})(props);
}
export default TbSunOff;
