import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StackForward icon from Tabler Icons
 * @module
 */
export function TbStackForward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 5l-8 4l8 4l8 -4l-8 -4",fill:"currentColor"}},{tag:"path",attr:{d:"M10 12l-6 3l8 4l8 -4l-6 -3"},child:[]}]})(props);
}
export default TbStackForward;
