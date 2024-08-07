import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Certificate icon from Tabler Icons
 * @module
 */
export function TbCertificate(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}},{tag:"path",attr:{d:"M13 17.5v4.5l2 -1.5l2 1.5v-4.5"},child:[]},{tag:"path",attr:{d:"M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"},child:[]},{tag:"path",attr:{d:"M6 9l12 0"},child:[]},{tag:"path",attr:{d:"M6 12l3 0"},child:[]},{tag:"path",attr:{d:"M6 15l2 0"},child:[]}]})(props);
}
export default TbCertificate;
