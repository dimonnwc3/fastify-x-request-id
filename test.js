const Fastify = require("fastify")
const fastifyReverseRoutes = require("./index")

let fastify

beforeEach(async () => {
  fastify = Fastify()
})

afterEach(async () => {
  await fastify.close()
})

describe("X-Request-Id", () => {
  it("Add X-Request-Id header to response", async () => {
    const id = 12345678
    await fastify.register(fastifyReverseRoutes).ready()

    const { headers } = await fastify.inject({
      url: "/x-request-id",
      headers: {
        "Request-Id": id,
      },
    })
    expect(headers).toHaveProperty("x-request-id")
    expect(headers["x-request-id"]).toBe(id)
  })
})
