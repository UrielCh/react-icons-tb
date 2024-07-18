import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Receipt icon from Tabler Icons
 * @module
 */
export function TbReceipt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2"}}]})(props);
}
export default TbReceipt;
