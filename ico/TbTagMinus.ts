import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TagMinus icon from Tabler Icons
 * @module
 */
export function TbTagMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}},{tag:"path",attr:{d:"M18.898 16.102l.699 -.699l.699 -.699c.941 -.941 .941 -2.467 0 -3.408l-7.71 -7.71c-.375 -.375 -.884 -.586 -1.414 -.586h-5.172c-1.657 0 -3 1.343 -3 3v5.172c0 .53 .211 1.039 .586 1.414l7.71 7.71c.471 .47 1.087 .706 1.704 .706"},child:[]},{tag:"path",attr:{d:"M16 19h6"},child:[]}]})(props);
}
export default TbTagMinus;
