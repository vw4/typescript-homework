# typescript-homework

## How to setup typescript project

### Install packages and create tsconfig.json
```cmd
npm init -y
npm i typescript ts-node -D
npx tsc --init
md src
md dist
echo "node_modules">.gitignore
echo "*">dist/.gitignore
echo "*.*">>dist/.gitignore
```

### Modify tsconfig.json
```JSON
{
  ...
  "lib": ["es2017", "ES2023.Array"],
  "rootDir": "./src",
  "outDir": "./dist",
  "strictNullChecks": true,
}
```