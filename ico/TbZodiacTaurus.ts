import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ZodiacTaurus icon from Tabler Icons
 * @module
 */
export function TbZodiacTaurus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 3a6 6 0 0 0 12 0"}},{tag:"path",attr:{d:"M12 15m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"},child:[]}]})(props);
}
export default TbZodiacTaurus;
