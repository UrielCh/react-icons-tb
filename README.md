# Tabler Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/tb)](https://jsr.io/@preact-icons/tb)

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/tabler/tabler-icons](https://github.com/tabler/tabler-icons)

[See available icons here](https://react-icons.deno.dev/tb)

## install the module

```bash
deno add @preact-icons/tb
dnpx jsr add @preact-icons/tb
pnpm dlx jsr add @preact-icons/tb
bunx jsr add @preact-icons/tb
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@^10.22.1",
 "preact/jsx-runtime": "npm:preact@^10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@^10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { TbAccessibleFilled } from "@preact-icons/tb"
```

## import a single icon, downloading just one icon

```ts
import { TbAccessibleFilled } from "react-icons/tb/TbAccessibleFilled"
```

or using default export

```ts
import TbAccessibleFilled from "react-icons/tb/TbAccessibleFilled"
```
