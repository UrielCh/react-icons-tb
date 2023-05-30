import { GenIcon, type IconBaseProps } from "https://deno.land/x/react_icons@1.0.0/mod.ts";

export function TbBorderSides(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M4 8v8"}},{tag:"path",attr:{d:"M20 16v-8"}},{tag:"path",attr:{d:"M8 4h8"}},{tag:"path",attr:{d:"M8 20h8"}}]})(props);
}
