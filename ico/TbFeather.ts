import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Feather icon from Tabler Icons
 * @module
 */
export function TbFeather(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 20l10 -10m0 -5v5h5m-9 -1v5h5m-9 -1v5h5m-5 -5l4 -4l4 -4"}},{tag:"path",attr:{d:"M19 10c.638 -.636 1 -1.515 1 -2.486a3.515 3.515 0 0 0 -3.517 -3.514c-.97 0 -1.847 .367 -2.483 1m-3 13l4 -4l4 -4"},child:[]}]})(props);
}
export default TbFeather;
