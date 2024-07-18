import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Pyramid icon from Tabler Icons
 * @module
 */
export function TbPyramid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.105 21.788a1.994 1.994 0 0 0 1.789 0l8.092 -4.054c.538 -.27 .718 -.951 .385 -1.452l-8.54 -13.836a.999 .999 0 0 0 -1.664 0l-8.54 13.836a1.005 1.005 0 0 0 .386 1.452l8.092 4.054z"}},{tag:"path",attr:{d:"M12 2v20"},child:[]}]})(props);
}
export default TbPyramid;
