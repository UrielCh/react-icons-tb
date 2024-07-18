import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * NavigationMinus icon from Tabler Icons
 * @module
 */
export function TbNavigationMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.5 15c-1.232 -2.67 -3.065 -6.67 -5.5 -12l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463"}},{tag:"path",attr:{d:"M16 19h6"},child:[]}]})(props);
}
export default TbNavigationMinus;
