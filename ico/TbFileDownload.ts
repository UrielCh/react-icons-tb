import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileDownload icon from Tabler Icons
 * @module
 */
export function TbFileDownload(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3v4a1 1 0 0 0 1 1h4"}},{tag:"path",attr:{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"},child:[]},{tag:"path",attr:{d:"M12 17v-6"},child:[]},{tag:"path",attr:{d:"M9.5 14.5l2.5 2.5l2.5 -2.5"},child:[]}]})(props);
}
export default TbFileDownload;
