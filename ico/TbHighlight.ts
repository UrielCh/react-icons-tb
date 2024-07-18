import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Highlight icon from Tabler Icons
 * @module
 */
export function TbHighlight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"}},{tag:"path",attr:{d:"M12.5 5.5l4 4"},child:[]},{tag:"path",attr:{d:"M4.5 13.5l4 4"},child:[]},{tag:"path",attr:{d:"M21 15v4h-8l4 -4z"},child:[]}]})(props);
}
export default TbHighlight;
