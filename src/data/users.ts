export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
}

export const users: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "user" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "user" },
];
