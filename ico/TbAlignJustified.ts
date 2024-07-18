import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlignJustified icon from Tabler Icons
 * @module
 */
export function TbAlignJustified(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 6l16 0"}},{tag:"path",attr:{d:"M4 12l16 0"},child:[]},{tag:"path",attr:{d:"M4 18l12 0"},child:[]}]})(props);
}
export default TbAlignJustified;
