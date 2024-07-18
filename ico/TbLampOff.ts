import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LampOff icon from Tabler Icons
 * @module
 */
export function TbLampOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 20h6"}},{tag:"path",attr:{d:"M12 20v-8"},child:[]},{tag:"path",attr:{d:"M7.325 7.35l-2.325 4.65h7m4 0h3l-4 -8h-6l-.338 .676"},child:[]},{tag:"path",attr:{d:"M3 3l18 18"},child:[]}]})(props);
}
export default TbLampOff;
