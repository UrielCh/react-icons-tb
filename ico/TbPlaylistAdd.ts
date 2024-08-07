import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlaylistAdd icon from Tabler Icons
 * @module
 */
export function TbPlaylistAdd(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 8h-14"}},{tag:"path",attr:{d:"M5 12h9"},child:[]},{tag:"path",attr:{d:"M11 16h-6"},child:[]},{tag:"path",attr:{d:"M15 16h6"},child:[]},{tag:"path",attr:{d:"M18 13v6"},child:[]}]})(props);
}
export default TbPlaylistAdd;
