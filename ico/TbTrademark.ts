import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Trademark icon from Tabler Icons
 * @module
 */
export function TbTrademark(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4.5 9h5m-2.5 0v6"}},{tag:"path",attr:{d:"M13 15v-6l3 4l3 -4v6"},child:[]}]})(props);
}
export default TbTrademark;
