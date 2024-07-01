import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData =
  | {
      status: true;
      user: User;
    }
  | { status: false };

interface User {
  email: string;
  password?: string;
  firstname: string;
  lastname: string;
}

const availableUsers: User[] = [
  {
    email: "admin@gmail.com",
    password: "admin",
    firstname: "Admin",
    lastname: "AdminLast",
  },
  {
    email: "user@gmail.com",
    password: "user",
    firstname: "User",
    lastname: "UserLast",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const user = availableUsers.filter(
    (item) =>
      item.email === req.body.email && item.password === req.body.password
  )[0];
  if (user) {
    delete user.password;
    res.status(200).json({ status: true, user });
  } else {
    res.status(200).json({
      status: false,
    });
  }
}
