import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BookmarkMinus icon from Tabler Icons
 * @module
 */
export function TbBookmarkMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 17l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v8"}},{tag:"path",attr:{d:"M16 19h6"},child:[]}]})(props);
}
export default TbBookmarkMinus;
