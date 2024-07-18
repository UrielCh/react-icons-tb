import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FlipHorizontal icon from Tabler Icons
 * @module
 */
export function TbFlipHorizontal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12l18 0"}},{tag:"path",attr:{d:"M7 16l10 0l-10 5l0 -5"},child:[]},{tag:"path",attr:{d:"M7 8l10 0l-10 -5l0 5"},child:[]}]})(props);
}
export default TbFlipHorizontal;
