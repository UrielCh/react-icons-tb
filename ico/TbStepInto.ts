import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StepInto icon from Tabler Icons
 * @module
 */
export function TbStepInto(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3l0 12"}},{tag:"path",attr:{d:"M16 11l-4 4"},child:[]},{tag:"path",attr:{d:"M8 11l4 4"},child:[]},{tag:"path",attr:{d:"M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]}]})(props);
}
export default TbStepInto;
