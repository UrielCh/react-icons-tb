import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AB icon from Tabler Icons
 * @module
 */
export function TbAB(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5"}},{tag:"path",attr:{d:"M12 6l0 12"},child:[]},{tag:"path",attr:{d:"M16 16v-8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3"},child:[]}]})(props);
}
export default TbAB;
