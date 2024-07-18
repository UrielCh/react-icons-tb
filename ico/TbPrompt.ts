import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Prompt icon from Tabler Icons
 * @module
 */
export function TbPrompt(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 7l5 5l-5 5"}},{tag:"path",attr:{d:"M13 17l6 0"},child:[]}]})(props);
}
export default TbPrompt;
