import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Network icon from Tabler Icons
 * @module
 */
export function TbNetwork(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 9a6 6 0 1 0 12 0a6 6 0 0 0 -12 0"}},{tag:"path",attr:{d:"M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6"},child:[]},{tag:"path",attr:{d:"M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6"},child:[]},{tag:"path",attr:{d:"M6 9h12"},child:[]},{tag:"path",attr:{d:"M3 20h7"},child:[]},{tag:"path",attr:{d:"M14 20h7"},child:[]},{tag:"path",attr:{d:"M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"},child:[]},{tag:"path",attr:{d:"M12 15v3"},child:[]}]})(props);
}
export default TbNetwork;
