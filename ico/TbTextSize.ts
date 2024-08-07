import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TextSize icon from Tabler Icons
 * @module
 */
export function TbTextSize(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7v-2h13v2"}},{tag:"path",attr:{d:"M10 5v14"},child:[]},{tag:"path",attr:{d:"M12 19h-4"},child:[]},{tag:"path",attr:{d:"M15 13v-1h6v1"},child:[]},{tag:"path",attr:{d:"M18 12v7"},child:[]},{tag:"path",attr:{d:"M17 19h2"},child:[]}]})(props);
}
export default TbTextSize;
