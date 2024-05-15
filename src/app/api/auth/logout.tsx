import type { NextApiRequest, NextApiResponse } from "next";

// interface of responce data
type ResponseData = {
  status: boolean;
};
// Current users login credentials

// Next JS interface types
// ResponseData ->returned dataTypes
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // delete user passwd before srnding
  // response to user
  res.status(200).json({ status: true });
}
