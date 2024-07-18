import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DogBowl icon from Tabler Icons
 * @module
 */
export function TbDogBowl(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 15l5.586 -5.585a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-3.587 3.586"}},{tag:"path",attr:{d:"M12 13l-3.586 -3.585a2 2 0 1 0 -3.414 -1.415a2 2 0 1 0 1.413 3.414l3.587 3.586"},child:[]},{tag:"path",attr:{d:"M3 20h18c-.175 -1.671 -.046 -3.345 -2 -5h-14c-1.333 1 -2 2.667 -2 5z"},child:[]}]})(props);
}
export default TbDogBowl;
