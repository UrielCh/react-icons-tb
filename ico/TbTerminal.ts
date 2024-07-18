import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Terminal icon from Tabler Icons
 * @module
 */
export function TbTerminal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 7l5 5l-5 5"}},{tag:"path",attr:{d:"M12 19l7 0"},child:[]}]})(props);
}
export default TbTerminal;
