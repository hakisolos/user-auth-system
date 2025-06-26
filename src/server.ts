import { Hono } from "hono";
import config from "../config";
import {
  signUp,
  login,
  logoutUser,
  changeEmail,
  getUser,
  verifyOtp,
} from "./controllers";
import { sign } from "hono/jwt";
const app = new Hono();
type AuthBody = {
  email: string;
  password: string;
};

type EmailBody = {
  newEmail: string;
};

type OtpBody = {
  email: string;
  options?: Record<string, any>;
};

app.post("/signup", async (c) => {
  const { email, password } = await c.req.json<AuthBody>();
  const result = await signUp(email, password);
  return c.json(result, result.success ? 200 : 400);
});

app.post("/login", async (c) => {
  const { email, password } = await c.req.json<AuthBody>();
  const result = await login(email, password);
  return c.json(result, result.success ? 200 : 401);
});

app.post("/logout", async (c) => {
  const result = await logoutUser();
  return c.json(result, result.success ? 200 : 400);
});

app.post("/change-email", async (c) => {
  const { newEmail } = await c.req.json<EmailBody>();
  const result = await changeEmail(newEmail);
  return c.json(result, result.success ? 200 : 400);
});

app.get("/get-user", async (c) => {
  const result = await getUser();
  return c.json(result, result.success ? 200 : 404);
});

app.post("/verify-otp", async (c) => {
  const { email, options } = await c.req.json<OtpBody>();
  const result = await verifyOtp(email, options || {});
  return c.json(result, result.success ? 200 : 400);
});

export default app;
