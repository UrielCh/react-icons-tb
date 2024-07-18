import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MailOpened icon from Tabler Icons
 * @module
 */
export function TbMailOpened(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9 6l9 -6l-9 -6l-9 6"}},{tag:"path",attr:{d:"M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"},child:[]},{tag:"path",attr:{d:"M3 19l6 -6"},child:[]},{tag:"path",attr:{d:"M15 13l6 6"},child:[]}]})(props);
}
export default TbMailOpened;
