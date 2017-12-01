## React Redux SSR
> สร้าง React Redux SSR from scratch

## Table of Contents
- [Init Package](#init-package)

## Init Package
> npm init -y
```json
{
  "name": "react-redux-ssr",
  "version": "1.0.0",
  "description": "react redux ssr",
  "main": "index.js",
  "scripts": {
    "dev:client": "webpack --config config/webpack.client.js --watch",
    "dev:build-server": "webpack --config config/webpack.server.js --watch",
    "dev:server": "nodemon --watch build --exec \"node build/bundle.js\"",
    "dev": "npm run dev:client && npm run dev:build-server && npm run dev:server",
    "prod:build-client": "webpack --config config/webpack.client.js",
    "prod:build-server": "webpack --config config/webpack.server.js",
    "start": "node build/bundle.js",
    "heroku-postbuild": "npm run prod:build-client && npm run prod:build-server"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/yuttasakcom/ReactReduxSSR.git"
  },
  "keywords": ["react redux ssr"],
  "author": "Yuttasak Pannawat<yuttasakcom@gmail.com>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/yuttasakcom/ReactReduxSSR/issues"
  },
  "homepage": "https://github.com/yuttasakcom/ReactReduxSSR#readme"
}

```