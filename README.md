# typescript-homework

## How to setup typescript project

### Install packages and create tsconfig.json
```cmd
npm init -y
npm i typescript ts-node -D
npx tsc --init
md src
md dist
```

### Modify tsconfig.json
```JSON
{
  ...
  "lib": ["es2017", "ES2023.Array"],
  "rootDir": "src",
  "outDir": "dist",
  "strictNullChecks": true,
}
```

### Create `.gitignore` files

`./`
```
node_modules
```
`./dist/`
```
*
*.*
```
