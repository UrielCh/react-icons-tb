import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * WashDryW icon from Tabler Icons
 * @module
 */
export function TbWashDryW(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}},{tag:"path",attr:{d:"M8 8l1.5 8h1l1.5 -6l1.5 6h1l1.5 -8"},child:[]}]})(props);
}
export default TbWashDryW;
