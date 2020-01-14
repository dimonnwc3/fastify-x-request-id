import * as fastify from "fastify"
import { Server, IncomingMessage, ServerResponse } from "http"

declare const requiestId: fastify.Plugin<
  Server,
  IncomingMessage,
  ServerResponse,
  {}
>

export default requiestId
