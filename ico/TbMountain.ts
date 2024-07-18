import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Mountain icon from Tabler Icons
 * @module
 */
export function TbMountain(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 20h18l-6.921 -14.612a2.3 2.3 0 0 0 -4.158 0l-6.921 14.612z"}},{tag:"path",attr:{d:"M7.5 11l2 2.5l2.5 -2.5l2 3l2.5 -2"},child:[]}]})(props);
}
export default TbMountain;
