# Secondary Entry Point Generators

## Setup

```bash
npm ci
```

## Relevant Changes

tsconfig.base.json - secondary entry point to adapter generators
```json
{
  ...
  "paths": {
    "@myorg/nx-plugin/adapters": ["libs/nx-plugin/src/adapters/index.ts"]
  }
}
```

libs/nx-plugin/package.json
```json
{
  ...
  "types": "./src/**/*.d.ts",
  "exports": {
    "./adapters": "./src/adapters/index.js"
  }
}
```

