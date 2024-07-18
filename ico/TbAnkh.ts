import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ankh icon from Tabler Icons
 * @module
 */
export function TbAnkh(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 13h12"}},{tag:"path",attr:{d:"M12 21v-8l-.422 -.211a6.472 6.472 0 0 1 -3.578 -5.789a4 4 0 1 1 8 0a6.472 6.472 0 0 1 -3.578 5.789l-.422 .211"},child:[]}]})(props);
}
export default TbAnkh;
