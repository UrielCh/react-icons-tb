import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PhotoSearch icon from Tabler Icons
 * @module
 */
export function TbPhotoSearch(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 8h.01"}},{tag:"path",attr:{d:"M11.5 21h-5.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5"},child:[]},{tag:"path",attr:{d:"M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"},child:[]},{tag:"path",attr:{d:"M20.2 20.2l1.8 1.8"},child:[]},{tag:"path",attr:{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2"},child:[]}]})(props);
}
export default TbPhotoSearch;
