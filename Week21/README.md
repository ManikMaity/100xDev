# Mono Repo and Turborepo

- When we see the any good software github repo, it not structed in nextjs app it is a mono repo.

## Mono -> Single

## Why use mono repo instead of separate folders

- If our backend isnt dependant on frontend, then we should put them separate.
- But if backend and frontend use some shared code, then we should use mono repo.
- Optimize build - It helps to optimize build process.
- Comon config file can be shared between backend and frontend.

## Common mono repo frameworks

- Turborepo
- Lerna
- Yarn / npm workspaces
- nx

## Turborepo

- Turborepo is a build system orcastrater.
- build system process sourse code to binary.
- In web dev build system ts + react => html + css + js
- Vite and tsc is build system.
- Turborepo cashes the output of the task. It can significantly speed up the build process.
- It only build the changed files.

## Initialize Turborepo

```bash
npx create-turbo@latest
```

- It will create a project with apps and packages.
- Packages include ui, eslint-config, typescript-config, which are the shared code.
- In the app there are two nextjs apps web and docs.
- Both web and dev use the same ui package.

```tsx
// apps/web/src/app/page.tsx
// Reusing button from ui
import { Button } from "@repo/ui/button";
```

## Create new component in ui
- If we create a new component in ui, like textInput.tsx.
- We have to define the name inside package.json
```json
 "exports": {
    "./button": "./src/button.tsx",
    "./card": "./src/card.tsx",
    "./code": "./src/code.tsx",
    "./textInput" : "./src/textInput.tsx" // ./textInput name can be anything
  },
```
- After that we can import it in web and docs.

```tsx
import { TextInput } from "@repo/ui/textInput";
```

## `turbo.json` file
```json
tasks": {
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["$TURBO_DEFAULT$", ".env*"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
```
- deendOn means that it will build when build is called. It will build the ui first.
- inputs means that it will build when any of these files are changed.
- outputs means it will cache the `.next` (output folder) folder except cache folder.
- So if we delete the .next folder, and run `turbo build`, it will get the  .next from cache folder.
- If we want to do the same for `dest` folder of the express, we have to add a `turbo.json` file in the root folder of the express server.
- Have to extend the original `turbo.json` file.
- ```json
{
    "extends": ["//"],
    "tasks": {
      "build": {
        "outputs": ["dist/**"]
      }
    }
  }
```