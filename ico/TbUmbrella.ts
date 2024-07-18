import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Umbrella icon from Tabler Icons
 * @module
 */
export function TbUmbrella(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12a8 8 0 0 1 16 0z"}},{tag:"path",attr:{d:"M12 12v6a2 2 0 0 0 4 0"},child:[]}]})(props);
}
export default TbUmbrella;
