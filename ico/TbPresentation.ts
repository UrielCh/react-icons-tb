import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Presentation icon from Tabler Icons
 * @module
 */
export function TbPresentation(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 4l18 0"}},{tag:"path",attr:{d:"M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10"},child:[]},{tag:"path",attr:{d:"M12 16l0 4"},child:[]},{tag:"path",attr:{d:"M9 20l6 0"},child:[]},{tag:"path",attr:{d:"M8 12l3 -3l2 2l3 -3"},child:[]}]})(props);
}
export default TbPresentation;
