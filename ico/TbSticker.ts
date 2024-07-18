import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sticker icon from Tabler Icons
 * @module
 */
export function TbSticker(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 12l-2 .5a6 6 0 0 1 -6.5 -6.5l.5 -2l8 8"}},{tag:"path",attr:{d:"M20 12a8 8 0 1 1 -8 -8"},child:[]}]})(props);
}
export default TbSticker;
