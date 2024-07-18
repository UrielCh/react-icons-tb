import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Checks icon from Tabler Icons
 * @module
 */
export function TbChecks(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 12l5 5l10 -10"}},{tag:"path",attr:{d:"M2 12l5 5m5 -5l5 -5"},child:[]}]})(props);
}
export default TbChecks;
