import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SpaceOff icon from Tabler Icons
 * @module
 */
export function TbSpaceOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 10v3a1 1 0 0 0 1 1h9m4 0h1a1 1 0 0 0 1 -1v-3"}},{tag:"path",attr:{d:"M3 3l18 18"},child:[]}]})(props);
}
export default TbSpaceOff;
