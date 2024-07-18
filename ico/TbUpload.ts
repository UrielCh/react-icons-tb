import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Upload icon from Tabler Icons
 * @module
 */
export function TbUpload(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"}},{tag:"path",attr:{d:"M7 9l5 -5l5 5"},child:[]},{tag:"path",attr:{d:"M12 4l0 12"},child:[]}]})(props);
}
export default TbUpload;
