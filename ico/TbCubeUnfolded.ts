import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CubeUnfolded icon from Tabler Icons
 * @module
 */
export function TbCubeUnfolded(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 15h10v5h5v-5h5v-5h-10v-5h-5v5h-5z"}},{tag:"path",attr:{d:"M7 15v-5h5v5h5v-5"},child:[]}]})(props);
}
export default TbCubeUnfolded;
