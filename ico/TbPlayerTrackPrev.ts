import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlayerTrackPrev icon from Tabler Icons
 * @module
 */
export function TbPlayerTrackPrev(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 5v14l-8 -7z"}},{tag:"path",attr:{d:"M10 5v14l-8 -7z"},child:[]}]})(props);
}
export default TbPlayerTrackPrev;
