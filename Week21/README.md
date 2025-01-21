# Mono Repo and Turborepo
- When we see the any good software github repo, it not structed in nextjs app it is a mono repo.

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
- It only  build the changed files.