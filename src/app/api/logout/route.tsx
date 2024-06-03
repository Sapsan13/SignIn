import type { NextApiResponse } from "next";
import type { NextRequest } from "next/server";

type ResponseData = {
  dBase: Record<any, any>[];
};

//Standart Default
export const GET = (
  req: Request | NextRequest,
  res: NextApiResponse<ResponseData>
) => {
  return Response.json({ dBase });

  //
};
//Standart Default

const dBase = [
  {
    id: "1",
    title: "LOGOUT",
    author: "abc6",
  },
];
