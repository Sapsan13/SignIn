import type { NextApiResponse } from "next";
import type { NextRequest } from "next/server";
import { dBase } from "../storage";

type ResponseData = {
  dBase: Record<any, any>[];
};

//Standart Default
export const POST = async (
  req: Request | NextRequest,
  res: NextApiResponse<ResponseData>
) => {
  const data = await req.json();
  dBase.push(data);
  console.log("DBASE CONSOLE REGISTER", dBase);
  return Response.json({ dBase });
  //
};
