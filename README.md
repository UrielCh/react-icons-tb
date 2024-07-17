# Tabler Icons icons for deno / Preact

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/tabler/tabler-icons](https://github.com/tabler/tabler-icons)

[See available icons here](https://react-icons.deno.dev/tb)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.22.1",
    "preact/": "https://esm.sh/preact@10.22.1/",
    "react-icons/tb":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-tb@1.0.10/mod.ts",
    "react-icons/tb/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-tb@1.0.10/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib tb

```ts
import { TbAccessibleFilled } from "https://deno.land/x/react_icons_tb@1.0.10/mod.ts"
```

## import_map import an icon from all icons

```ts
import { TbAccessibleFilled } from "react-icons/tb"
```

## import a single icon, downloading just one icon

```ts
import { TbAccessibleFilled } from "react-icons/tb/TbAccessibleFilled.ts"
```

or using default export

```ts
import TbAccessibleFilled from "react-icons/tb/TbAccessibleFilled.ts"
```

