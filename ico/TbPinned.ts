import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Pinned icon from Tabler Icons
 * @module
 */
export function TbPinned(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 4v6l-2 4v2h10v-2l-2 -4v-6"}},{tag:"path",attr:{d:"M12 16l0 5"},child:[]},{tag:"path",attr:{d:"M8 4l8 0"},child:[]}]})(props);
}
export default TbPinned;
