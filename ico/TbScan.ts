import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Scan icon from Tabler Icons
 * @module
 */
export function TbScan(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 7v-1a2 2 0 0 1 2 -2h2"}},{tag:"path",attr:{d:"M4 17v1a2 2 0 0 0 2 2h2"},child:[]},{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v1"},child:[]},{tag:"path",attr:{d:"M16 20h2a2 2 0 0 0 2 -2v-1"},child:[]},{tag:"path",attr:{d:"M5 12l14 0"},child:[]}]})(props);
}
export default TbScan;
