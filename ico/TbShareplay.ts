import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Shareplay icon from Tabler Icons
 * @module
 */
export function TbShareplay(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 18a3 3 0 0 0 3 -3v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8a3 3 0 0 0 3 3"}},{tag:"path",attr:{d:"M9 20h6l-3 -5z"},child:[]}]})(props);
}
export default TbShareplay;
