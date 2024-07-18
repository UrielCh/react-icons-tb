import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Scissors icon from Tabler Icons
 * @module
 */
export function TbScissors(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}},{tag:"path",attr:{d:"M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"},child:[]},{tag:"path",attr:{d:"M8.6 8.6l10.4 10.4"},child:[]},{tag:"path",attr:{d:"M8.6 15.4l10.4 -10.4"},child:[]}]})(props);
}
export default TbScissors;
