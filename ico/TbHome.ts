import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Home icon from Tabler Icons
 * @module
 */
export function TbHome(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12l-2 0l9 -9l9 9l-2 0"}},{tag:"path",attr:{d:"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"},child:[]},{tag:"path",attr:{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"},child:[]}]})(props);
}
export default TbHome;
