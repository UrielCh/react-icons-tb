import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LocationDown icon from Tabler Icons
 * @module
 */
export function TbLocationDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.328 9.217"}},{tag:"path",attr:{d:"M19 16v6"},child:[]},{tag:"path",attr:{d:"M22 19l-3 3l-3 -3"},child:[]}]})(props);
}
export default TbLocationDown;
