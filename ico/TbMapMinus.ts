import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MapMinus icon from Tabler Icons
 * @module
 */
export function TbMapMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v11"}},{tag:"path",attr:{d:"M9 4v13"},child:[]},{tag:"path",attr:{d:"M15 7v8"},child:[]},{tag:"path",attr:{d:"M16 19h6"},child:[]}]})(props);
}
export default TbMapMinus;
