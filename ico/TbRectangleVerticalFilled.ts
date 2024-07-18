import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * RectangleVerticalFilled icon from Tabler Icons
 * @module
 */
export function TbRectangleVerticalFilled(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M17 2h-10a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3z"}}]})(props);
}
export default TbRectangleVerticalFilled;
