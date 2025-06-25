import { Hono } from "hono";
import config from "../config";

const app = new Hono();

app.get("/", (c) => {
  return c.json("hello world");
});


export default app
