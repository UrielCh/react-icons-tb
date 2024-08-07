import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Usb icon from Tabler Icons
 * @module
 */
export function TbUsb(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M12 17v-11.5"},child:[]},{tag:"path",attr:{d:"M7 10v3l5 3"},child:[]},{tag:"path",attr:{d:"M12 14.5l5 -2v-2.5"},child:[]},{tag:"path",attr:{d:"M16 10h2v-2h-2z"},child:[]},{tag:"path",attr:{d:"M7 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M10 5.5h4l-2 -2.5z"},child:[]}]})(props);
}
export default TbUsb;
