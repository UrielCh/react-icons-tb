import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Dashboard icon from Tabler Icons
 * @module
 */
export function TbDashboard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M13.45 11.55l2.05 -2.05"},child:[]},{tag:"path",attr:{d:"M6.4 20a9 9 0 1 1 11.2 0z"},child:[]}]})(props);
}
export default TbDashboard;
