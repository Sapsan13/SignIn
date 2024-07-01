import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  status: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ status: true });
}
