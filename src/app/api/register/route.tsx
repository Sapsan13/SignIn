import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  dBase: Record<any, any>[];
};

//Standart Default
export const POST = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const data = await req.json();
  dBase.push(data);
  console.log("DBASE CONSOLE REGISTER", dBase);
  return Response.json({ dBase });
  //
};
//Standart Default
// .body.push(bBase);
export const dBase: Record<any, any>[] = [];
// console.log(dBase);
