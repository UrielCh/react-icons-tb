import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Clock24 icon from Tabler Icons
 * @module
 */
export function TbClock24(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12a9 9 0 0 0 5.998 8.485m12.002 -8.485a9 9 0 1 0 -18 0"}},{tag:"path",attr:{d:"M12 7v5"},child:[]},{tag:"path",attr:{d:"M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"},child:[]},{tag:"path",attr:{d:"M18 15v2a1 1 0 0 0 1 1h1"},child:[]},{tag:"path",attr:{d:"M21 15v6"},child:[]}]})(props);
}
export default TbClock24;
