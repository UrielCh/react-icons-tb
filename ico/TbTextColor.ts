import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TextColor icon from Tabler Icons
 * @module
 */
export function TbTextColor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 15v-7a3 3 0 0 1 6 0v7"}},{tag:"path",attr:{d:"M9 11h6"},child:[]},{tag:"path",attr:{d:"M5 19h14"},child:[]}]})(props);
}
export default TbTextColor;
