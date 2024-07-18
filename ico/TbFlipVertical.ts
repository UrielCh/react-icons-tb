import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FlipVertical icon from Tabler Icons
 * @module
 */
export function TbFlipVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3l0 18"}},{tag:"path",attr:{d:"M16 7l0 10l5 0l-5 -10"},child:[]},{tag:"path",attr:{d:"M8 7l0 10l-5 0l5 -10"},child:[]}]})(props);
}
export default TbFlipVertical;
