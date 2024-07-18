import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlayerTrackNext icon from Tabler Icons
 * @module
 */
export function TbPlayerTrackNext(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 5v14l8 -7z"}},{tag:"path",attr:{d:"M14 5v14l8 -7z"},child:[]}]})(props);
}
export default TbPlayerTrackNext;
