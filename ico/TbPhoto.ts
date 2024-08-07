import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Photo icon from Tabler Icons
 * @module
 */
export function TbPhoto(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 8h.01"}},{tag:"path",attr:{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"},child:[]},{tag:"path",attr:{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"},child:[]},{tag:"path",attr:{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"},child:[]}]})(props);
}
export default TbPhoto;
