import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PhotoPin icon from Tabler Icons
 * @module
 */
export function TbPhotoPin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 8h.01"}},{tag:"path",attr:{d:"M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5"},child:[]},{tag:"path",attr:{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2.5 2.5"},child:[]},{tag:"path",attr:{d:"M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"},child:[]},{tag:"path",attr:{d:"M19 18v.01"},child:[]}]})(props);
}
export default TbPhotoPin;
