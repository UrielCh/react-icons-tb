import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PhotoShare icon from Tabler Icons
 * @module
 */
export function TbPhotoShare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 8h.01"}},{tag:"path",attr:{d:"M12 21h-6a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v7"},child:[]},{tag:"path",attr:{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3"},child:[]},{tag:"path",attr:{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0"},child:[]},{tag:"path",attr:{d:"M16 22l5 -5"},child:[]},{tag:"path",attr:{d:"M21 21.5v-4.5h-4.5"},child:[]}]})(props);
}
export default TbPhotoShare;
