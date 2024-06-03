import type { NextApiResponse } from "next";
import type { NextRequest } from "next/server";

type ResponseData = {
  data: Record<any, any>[];
};

//Standart Default
export default function handler(
  req: Request | NextRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ data: dBase });
  //
}
// Deta to process
const dBase = [
  {
    id: "1",
    title: "abc6",
    author: "abc6",
  },
];

const chartsData = {
  TotalIncomes: {
    // ...
  },
  Booked: {},
};
