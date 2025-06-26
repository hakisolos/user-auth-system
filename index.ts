
// i use bun cus node is gay >_<
import app from "./src/server";
import config from "./config";
Bun.serve({
  fetch: app.fetch,
  port: 4000,
});
console.log(`app running at port ${config.PORT}`)