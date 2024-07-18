import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MailMinus icon from Tabler Icons
 * @module
 */
export function TbMailMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8"}},{tag:"path",attr:{d:"M16 19h6"},child:[]},{tag:"path",attr:{d:"M3 7l9 6l9 -6"},child:[]}]})(props);
}
export default TbMailMinus;
