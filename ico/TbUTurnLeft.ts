import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UTurnLeft icon from Tabler Icons
 * @module
 */
export function TbUTurnLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 20v-11.5a4.5 4.5 0 1 0 -9 0v8.5"}},{tag:"path",attr:{d:"M11 14l-3 3l-3 -3"},child:[]}]})(props);
}
export default TbUTurnLeft;
