import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * RefreshDot icon from Tabler Icons
 * @module
 */
export function TbRefreshDot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"}},{tag:"path",attr:{d:"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"},child:[]},{tag:"path",attr:{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]}]})(props);
}
export default TbRefreshDot;
