import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SignalE icon from Tabler Icons
 * @module
 */
export function TbSignalE(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 8h-4v8h4"}},{tag:"path",attr:{d:"M10 12h2.5"},child:[]}]})(props);
}
export default TbSignalE;
