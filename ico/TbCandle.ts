import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Candle icon from Tabler Icons
 * @module
 */
export function TbCandle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21h6v-10a1 1 0 0 0 -1 -1h-4a1 1 0 0 0 -1 1z"}},{tag:"path",attr:{d:"M12 2l1.465 1.638a2 2 0 1 1 -3.015 .099z"},child:[]}]})(props);
}
export default TbCandle;
