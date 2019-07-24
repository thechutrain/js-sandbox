## JS-Sandbox

> node.js + babel + es6 modules + jest

## Features:

- babel
- es6 modules (babel)
- jest
- code runner (VS code)
- debugging (VS Code)

## Getting started:

```
$ npm install
```

## Trouble Shooting:

#### Issues with Code Runner (VS Code extension)

- ensure that you're using babel-node in your `settings.json`

```
"code-runner.executorMap": {
  "javascript": "$workspaceRoot/node_modules/.bin/babel-node --harmony $fullFileName",
  ...
}
```
