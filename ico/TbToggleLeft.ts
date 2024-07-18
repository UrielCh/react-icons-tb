import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ToggleLeft icon from Tabler Icons
 * @module
 */
export function TbToggleLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M2 6m0 6a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6v0a6 6 0 0 1 -6 6h-8a6 6 0 0 1 -6 -6z"},child:[]}]})(props);
}
export default TbToggleLeft;
