import { GenIcon, type IconBaseProps } from "https://deno.land/x/react_icons@1.0.0/mod.ts";

export function TbFlipVertical(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M12 3l0 18"}},{tag:"path",attr:{d:"M16 7l0 10l5 0l-5 -10"}},{tag:"path",attr:{d:"M8 7l0 10l-5 0l5 -10"}}]})(props);
}
export default TbFlipVertical;
