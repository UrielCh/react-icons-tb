import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Keyframes icon from Tabler Icons
 * @module
 */
export function TbKeyframes(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z"}},{tag:"path",attr:{d:"M17 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836"},child:[]},{tag:"path",attr:{d:"M13 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836"},child:[]}]})(props);
}
export default TbKeyframes;
