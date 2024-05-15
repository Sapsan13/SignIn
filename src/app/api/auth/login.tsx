import type { NextApiRequest, NextApiResponse } from "next";

// interface of responce data
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

// Current users login credentials
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

// Next JS interface types
// ResponseData ->returned dataTypes
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const user = availableUsers.filter(
    (item) =>
      item.email === req.body.email && item.password === req.body.password
  )[0];
  //
  if (user) {
    // delete user passwd before srnding
    delete user.password;
    // response to user
    res.status(200).json({ status: true, user });
  } else {
    res.status(200).json({
      status: false,
    });
  }
}
