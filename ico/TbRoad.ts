import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Road icon from Tabler Icons
 * @module
 */
export function TbRoad(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19l4 -14"}},{tag:"path",attr:{d:"M16 5l4 14"},child:[]},{tag:"path",attr:{d:"M12 8v-2"},child:[]},{tag:"path",attr:{d:"M12 13v-2"},child:[]},{tag:"path",attr:{d:"M12 18v-2"},child:[]}]})(props);
}
export default TbRoad;
