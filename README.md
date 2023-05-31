# Tabler Icons icons for deno / Preact

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/tabler/tabler-icons](https://github.com/tabler/tabler-icons)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=tb)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/tb":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-tb@1.0.1/mod.ts",
    "react-icons/tb/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-tb/ico/",
  }
}
```

## Direct import sample

```ts
import { Tb123 } from "https://deno.land/x/react_icons_tb@1.0.1/mod.ts"
```

## import_map import sample

```ts
import { Tb123 } from "react-icons/tb"
```

## minimal import

```ts
import { Tb123 } from "react-icons/tb/Tb123.ts"
```

## minimal import using default export

```ts
import Tb123 from "react-icons/tb/Tb123.ts"
```

