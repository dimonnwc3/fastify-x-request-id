const fp = require("fastify-plugin")

const plugin = async function(fastify, _, next) {
  fastify.addHook("onSend", async (req, reply) => {
    reply.header("X-Request-Id", req.id)
  })

  next()
}

module.exports = fp(plugin, {
  fastify: ">= 1.6.0",
  name: "x-request-id",
})
