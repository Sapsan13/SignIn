import type { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";

type ResponseData = {
  dBase: Record<any, any>[];
};

//Standart Default
export const GET = (
  req: NextApiRequest,
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
