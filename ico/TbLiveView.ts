import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LiveView icon from Tabler Icons
 * @module
 */
export function TbLiveView(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 8v-2a2 2 0 0 1 2 -2h2"}},{tag:"path",attr:{d:"M4 16v2a2 2 0 0 0 2 2h2"},child:[]},{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v2"},child:[]},{tag:"path",attr:{d:"M16 20h2a2 2 0 0 0 2 -2v-2"},child:[]},{tag:"path",attr:{d:"M12 11l0 .01"},child:[]},{tag:"path",attr:{d:"M12 18l-3.5 -5a4 4 0 1 1 7 0l-3.5 5"},child:[]}]})(props);
}
export default TbLiveView;
