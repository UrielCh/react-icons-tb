import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HomeLink icon from Tabler Icons
 * @module
 */
export function TbHomeLink(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.085 11.085l-8.085 -8.085l-9 9h2v7a2 2 0 0 0 2 2h4.5"}},{tag:"path",attr:{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.807 1.143"},child:[]},{tag:"path",attr:{d:"M21 21m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M21 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M16 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M21 16l-5 3l5 2"},child:[]}]})(props);
}
export default TbHomeLink;
