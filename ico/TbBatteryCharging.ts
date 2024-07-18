import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BatteryCharging icon from Tabler Icons
 * @module
 */
export function TbBatteryCharging(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 7h1a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-2"}},{tag:"path",attr:{d:"M8 7h-2a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h1"},child:[]},{tag:"path",attr:{d:"M12 8l-2 4h3l-2 4"},child:[]}]})(props);
}
export default TbBatteryCharging;
