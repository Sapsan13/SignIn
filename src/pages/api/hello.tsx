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

var dBase = [
  {
    id: "1",
    title: "abc6",
    author: "abc6",
  },
  {
    id: "2",
    title: "abc5",
    author: "abc5",
  },
  {
    id: "2",
    title: "abc4",
    author: "abc4",
  },
  {
    id: "3",
    title: "abc3",
    author: "abc3",
  },
  {
    id: "4",
    title: "abc2",
    author: "abc2",
  },
  {
    id: "5",
    title: "abc1",
    author: "abc1",
  },
];
