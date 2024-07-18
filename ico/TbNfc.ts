import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Nfc icon from Tabler Icons
 * @module
 */
export function TbNfc(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 20a3 3 0 0 1 -3 -3v-11l5 5"}},{tag:"path",attr:{d:"M13 4a3 3 0 0 1 3 3v11l-5 -5"},child:[]},{tag:"path",attr:{d:"M4 4m0 3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3z"},child:[]}]})(props);
}
export default TbNfc;
