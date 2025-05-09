## Conventions

- Imports
  - alias importing `React` not necessary.
    - is already default export, and works with libraries.
    - new jsx transformations are used now.
  - always mark `type` for non-value or type symbols to help tree-shaking.
    - example: `import {type ReactNode} from 'react'`
- Function Signature
  - func decleration is hoisted, shows func on IDE, arrow function is typeSafe.
  - use const arrow funcs, not func definitions for FCs.
    - predictable scopes, no funny `this` behavior
    - for function declerations, scope of `this` depends.
  - do not use `React.FC<T>` for typing arrow functions.
    - not necessary anymore, FCs are first-class now.
    - introduces implicit behavior like injecting children in prop.
    - extra generic unused parameters.
  - set defaults, do not use old `.defaultProps` behavior. Runtime heavy.
- Props
  - prefer interface, experimenting with types.
  - avoid using `PropsWithChildren<T>`, implicit behavior.
  - use `Readonly<T>` props sparingly, won't work with destructuring.
    - sonarCube will detect unused or reassigned props.
  - avoiding dot import, will allow SonarScan for unused props.
  - use Pascal for interfaces and types.

## Commands

#### React

- `npm create vite`
- `npm i (or npm install)`
- `npm run dev`

#### UI Stuff

- `npm i bootstrap` # (5.3.5)
- `npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest`

#### Git

- `git init`
- `git add -A .`
- `git branch -M main`
- `git commit -am "init commit"`


---
*TBT Original: render app in 2 nodes, see if session shared.*