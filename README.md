# Tabler Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/tb)](https://jsr.io/@preact-icons/tb)

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/tabler/tabler-icons](https://github.com/tabler/tabler-icons)

[See available icons here](https://react-icons.deno.dev/tb)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/tb": "jsr:@preact-icons/tb@^1.0.11/mod.ts",
    "react-icons/tb/": "jsr:@preact-icons/tb@^1.0.11/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib tb

```ts
import { TbAccessibleFilled } from "jsr:preact-icons/tb@1.0.11/mod.ts"
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

