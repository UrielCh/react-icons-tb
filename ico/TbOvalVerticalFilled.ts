import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OvalVerticalFilled icon from Tabler Icons
 * @module
 */
export function TbOvalVerticalFilled(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 5c-5.457 0 -10 3.028 -10 7s4.543 7 10 7s10 -3.028 10 -7s-4.543 -7 -10 -7z"}}]})(props);
}
export default TbOvalVerticalFilled;
