import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Alarm icon from Tabler Icons
 * @module
 */
export function TbAlarm(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}},{tag:"path",attr:{d:"M12 10l0 3l2 0"},child:[]},{tag:"path",attr:{d:"M7 4l-2.75 2"},child:[]},{tag:"path",attr:{d:"M17 4l2.75 2"},child:[]}]})(props);
}
export default TbAlarm;
