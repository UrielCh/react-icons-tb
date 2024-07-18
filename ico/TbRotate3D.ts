import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Rotate3D icon from Tabler Icons
 * @module
 */
export function TbRotate3D(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3a7 7 0 0 1 7 7v4l-3 -3"}},{tag:"path",attr:{d:"M22 11l-3 3"},child:[]},{tag:"path",attr:{d:"M8 15.5l-5 -3l5 -3l5 3v5.5l-5 3z"},child:[]},{tag:"path",attr:{d:"M3 12.5v5.5l5 3"},child:[]},{tag:"path",attr:{d:"M8 15.545l5 -3.03"},child:[]}]})(props);
}
export default TbRotate3D;
