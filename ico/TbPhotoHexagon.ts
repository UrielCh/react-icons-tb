import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PhotoHexagon icon from Tabler Icons
 * @module
 */
export function TbPhotoHexagon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 8h.01"}},{tag:"path",attr:{d:"M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"},child:[]},{tag:"path",attr:{d:"M3.5 15.5l4.5 -4.5c.928 -.893 2.072 -.893 3 0l5 5"},child:[]},{tag:"path",attr:{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2.5 2.5"},child:[]}]})(props);
}
export default TbPhotoHexagon;
