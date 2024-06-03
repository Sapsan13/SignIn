import type { NextApiRequest, NextApiResponse } from "next";
import { dBase } from "../../register/route";
type ResponseData = {
  dBase: Record<any, any>[];
};

//Standart Default
export const POST = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const data = await req.json();

  const statuss = dBase.filter(
    (item) => item.mail === data.mail && item.password === data.password
  )[0];
  console.log("STATUS", statuss);
  return Response.json({ statuss });
};
