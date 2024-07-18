import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TriangleFilled icon from Tabler Icons
 * @module
 */
export function TbTriangleFilled(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z"}}]})(props);
}
export default TbTriangleFilled;
