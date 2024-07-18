import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LinkMinus icon from Tabler Icons
 * @module
 */
export function TbLinkMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 15l6 -6"}},{tag:"path",attr:{d:"M11 6l.463 -.536a5 5 0 1 1 7.071 7.072l-.534 .464"},child:[]},{tag:"path",attr:{d:"M12.603 18.534a5.07 5.07 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"},child:[]},{tag:"path",attr:{d:"M16 19h6"},child:[]}]})(props);
}
export default TbLinkMinus;
