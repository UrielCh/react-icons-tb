import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * InnerShadowTopLeft icon from Tabler Icons
 * @module
 */
export function TbInnerShadowTopLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3a9 9 0 1 1 0 18a9 9 0 0 1 0 -18z"}},{tag:"path",attr:{d:"M6 12a6 6 0 0 1 6 -6"},child:[]}]})(props);
}
export default TbInnerShadowTopLeft;
