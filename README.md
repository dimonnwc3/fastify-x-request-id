# fastify-x-request-id

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/) [![Build Status](https://travis-ci.org/dimonnwc3/fastify-x-request-id.svg?branch=master)](https://travis-ci.org/dimonnwc3/fastify-x-request-id)

Fastify x-request-id plugin, with this you can trace individual requests to a web service (such as a REST API) from the client to the server and its backends.

## Install

### NPM

```
npm i fastify-x-request-id
```

### Yarn

```
yarn add fastify-x-request-id
```

## Usage

Add it to your project with `register` and you are done!

```js
const Fastify = require("fastify")

const fastify = new Fastify()

fastify.register(require("fastify-x-request-id"))

fastify.listen(3000)
```

## Reference

This plugin adds `X-Request-Id` header to every response from fastify `request.id`.

## License

Licensed under [MIT](./LICENSE).
