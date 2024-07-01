import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  data: Record<any, any>[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ data: dBase });
}

const dBase = [
  {
    id: "1",
    title: "abc6",
    author: "abc6",
  },
];
