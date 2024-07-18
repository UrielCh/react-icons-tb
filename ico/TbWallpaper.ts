import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Wallpaper icon from Tabler Icons
 * @module
 */
export function TbWallpaper(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-12"}},{tag:"path",attr:{d:"M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]},{tag:"path",attr:{d:"M8 18v-12a2 2 0 1 0 -4 0v12"},child:[]}]})(props);
}
export default TbWallpaper;
