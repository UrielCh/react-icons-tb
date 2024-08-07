import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GenderFemme icon from Tabler Icons
 * @module
 */
export function TbGenderFemme(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}},{tag:"path",attr:{d:"M12 14v7"},child:[]},{tag:"path",attr:{d:"M7 18h10"},child:[]}]})(props);
}
export default TbGenderFemme;
