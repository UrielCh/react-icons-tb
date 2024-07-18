import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlayerSkipBack icon from Tabler Icons
 * @module
 */
export function TbPlayerSkipBack(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 5v14l-12 -7z"}},{tag:"path",attr:{d:"M4 5l0 14"},child:[]}]})(props);
}
export default TbPlayerSkipBack;
