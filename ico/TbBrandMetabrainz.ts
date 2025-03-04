import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BrandMetabrainz icon from Tabler Icons
 * @module
 */
export function TbBrandMetabrainz(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 7v10l7 4v-18z"}},{tag:"path",attr:{d:"M21 7v10l-7 4v-18z"},child:[]}]})(props);
}
export default TbBrandMetabrainz;
