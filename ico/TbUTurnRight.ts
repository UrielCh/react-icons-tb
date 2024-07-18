import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UTurnRight icon from Tabler Icons
 * @module
 */
export function TbUTurnRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 20v-11.5a4.5 4.5 0 0 1 9 0v8.5"}},{tag:"path",attr:{d:"M13 14l3 3l3 -3"},child:[]}]})(props);
}
export default TbUTurnRight;
