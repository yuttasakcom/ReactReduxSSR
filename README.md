## React Redux SSR
> React Redux SSR from scratch

## Demo
[Demo](https://rrdssr.herokuapp.com/)

## Screenshot
<img src="https://github.com/yuttasakcom/ReactReduxSSR/blob/master/public/statics/img/screenshot.png" />

## Repo api todos
[Github](https://github.com/yuttasakcom/NodeJSFile)

## Table of Contents
- [Code Structure](#code-sturcture)
- [Package](#package)

## Code Sturcture
```
- config
  |_webpack.client.js
  |_webpack.server.js
  |_webpack.base.js
- client
  |_actions
  | |_index.js
  |_components
  | |_Action.js
  | |_AddOption.js
  | |_Header.js
  | |_Option.js
  | |_OptionModal.js
  | |_Options.js
  |_pages
  | |_TodoPage.js
  |_reducers
  | |_index.js
  | |_todoReducer.js
  |_routes
  | |_index.js
  |_App.js
  |_client.js
- server
  |_helpers
  | |_createStore.js
  | |_renderer.js
  |_server.js
- package.json
```

## Package
```json
{
  "name": "react-redux-ssr",
  "version": "1.0.0",
  "description": "react redux ssr",
  "main": "index.js",
  "scripts": {
    "dev:build-client": "webpack --config config/webpack.client.js --watch",
    "dev:build-server": "webpack --config config/webpack.server.js --watch",
    "dev:server": "nodemon --watch build --exec \"node build/bundle.js\"",
    "dev": "npm-run-all --parallel dev:*",
    "prod:build-client": "webpack --config config/webpack.client.js",
    "prod:build-server": "webpack --config config/webpack.server.js",
    "heroku-postbuild": "npm run prod:build-client && npm run prod:build-server",
    "start": "node build/bundle.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/yuttasakcom/ReactReduxSSR.git"
  },
  "keywords": [
    "react redux ssr"
  ],
  "author": "Yuttasak Pannawat<yuttasakcom@gmail.com>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/yuttasakcom/ReactReduxSSR/issues"
  },
  "homepage": "https://github.com/yuttasakcom/ReactReduxSSR#readme",
  "dependencies": {
    "axios": "^0.17.1",
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-polyfill": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "css-loader": "^0.28.7",
    "express": "^4.16.2",
    "express-http-proxy": "^1.1.0",
    "extract-text-webpack-plugin": "^3.0.2",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "node-sass": "^4.7.2",
    "normalize.css": "^7.0.0",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-modal": "^3.1.7",
    "react-redux": "^5.0.6",
    "react-router-config": "^1.0.0-beta.4",
    "react-router-dom": "^4.2.2",
    "redux": "^3.7.2",
    "redux-thunk": "^2.2.0",
    "sass-loader": "^6.0.6",
    "serialize-javascript": "^1.4.0",
    "style-loader": "^0.19.0",
    "webpack": "^3.9.1",
    "webpack-merge": "^4.1.1",
    "webpack-node-externals": "^1.6.0"
  },
  "devDependencies": {
    "npm-run-all": "^4.1.2"
  }
}
```