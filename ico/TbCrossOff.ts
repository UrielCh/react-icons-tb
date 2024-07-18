import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CrossOff icon from Tabler Icons
 * @module
 */
export function TbCrossOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 12h3v-4h-5v-5h-4v3m-2 2h-3v4h5v9h4v-7"}},{tag:"path",attr:{d:"M3 3l18 18"},child:[]}]})(props);
}
export default TbCrossOff;
