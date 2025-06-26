
# USER-AUTH-SYSTEM

A modern and lightweight user authentication API built with **Bun**, **Hono**, **TypeScript**, and **Supabase**.

This project provides a full auth flow with clean and reusable controllers for sign-up, login, logout, email change, OTP verification, and session management.

---

## 🚀 Tech Stack

- [Bun](https://bun.sh) — super-fast JS runtime
- [Hono](https://hono.dev) — ultra-light, TypeScript-first web framework
- [TypeScript](https://www.typescriptlang.org)
- [Supabase](https://supabase.com) — powerful BaaS for auth and database

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/hakisolos/user-auth-system.git
cd user-auth-system
```

### 2. Install dependencies

```bash
bun install
```

### 3. Configure Supabase

Create a `.env` file at the root and add your Supabase keys:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

You can find these in your Supabase project → Settings → API.

---

## 🛠️ Run the Dev Server

```bash
bun run dev
```

Server will be running on `http://localhost:3000`

---

## 📌 API Endpoints

| Route             | Method | Description                  |
|------------------|--------|------------------------------|
| `/signup`        | POST   | Register a new user          |
| `/login`         | POST   | Log in an existing user      |
| `/logout`        | POST   | Log out the current session  |
| `/change-email`  | POST   | Change user’s email          |
| `/get-user`      | GET    | Get current logged-in user   |
| `/verify-otp`    | POST   | Verify OTP or magic link     |

---

## 🧪 Example Body Payloads

### Sign Up / Login

```json
{
  "email": "example@mail.com",
  "password": "password123"
}
```

### Change Email

```json
{
  "newEmail": "new@mail.com"
}
```

### OTP Verification

```json
{
  "email": "example@mail.com",
  "options": {
    "emailRedirectTo": "https://yourdomain.com/welcome"
  }
}
```

---

## 🐛 Issues

Found a bug or need help? Feel free to [open an issue](https://github.com/hakisolos/user-auth-system/issues) and wifey will be right there to fix it 💖

---

## 🤝 Contributing

Wanna add some love to the codebase? Fork it, push your changes, and open a pull request! PRs are warmly welcomed 💕

---

## CREDITS

> shell haki [about](https://www.hakidev.my.id) a

## 📄 License

MIT © [Shell haki](https://github.com/hakisolos)
