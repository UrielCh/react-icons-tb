import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CloudSnow icon from Tabler Icons
 * @module
 */
export function TbCloudSnow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7"}},{tag:"path",attr:{d:"M11 15v.01m0 3v.01m0 3v.01m4 -4v.01m0 3v.01"},child:[]}]})(props);
}
export default TbCloudSnow;
