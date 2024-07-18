import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StackBackward icon from Tabler Icons
 * @module
 */
export function TbStackBackward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 12l6 -3l-8 -4l-8 4l6 3"}},{tag:"path",attr:{d:"M10 12l-6 3l8 4l8 -4l-6 -3l-2 1z",fill:"currentColor"},child:[]}]})(props);
}
export default TbStackBackward;
