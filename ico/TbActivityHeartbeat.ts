import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ActivityHeartbeat icon from Tabler Icons
 * @module
 */
export function TbActivityHeartbeat(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5"}}]})(props);
}
export default TbActivityHeartbeat;
