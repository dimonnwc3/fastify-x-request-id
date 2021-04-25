import * as fastify from "fastify"
import { IncomingMessage, Server, ServerResponse } from "http"

declare const requiestId: fastify.Plugin<
  Server,
  IncomingMessage,
  ServerResponse,
  {}
>

export default requiestId
