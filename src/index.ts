import "dotenv/config";
import express, { Request, Response } from "express";
import { users } from "./data/users";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.get("/api/hello", (_req: Request, res: Response) => {
  res.json({ message: "Hello, World!" });
});

app.get("/api/users", (_req: Request, res: Response) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
