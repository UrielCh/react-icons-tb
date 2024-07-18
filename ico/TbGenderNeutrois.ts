import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GenderNeutrois icon from Tabler Icons
 * @module
 */
export function TbGenderNeutrois(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 10a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z"}},{tag:"path",attr:{d:"M12 10v-7"},child:[]}]})(props);
}
export default TbGenderNeutrois;
