import { NextRequest } from "next/server";
import type { NextApiResponse } from "next";
import { dBase } from "../../storage";
type ResponseData = {
  dBase: Record<any, any>[];
};

//Standart Default
export const POST = async (
  req: Request | NextRequest,
  res: NextApiResponse<ResponseData>
) => {
  const data = await req.json();

  const statuss = dBase.filter(
    (item) => item.mail === data.mail && item.password === data.password
  )[0];
  console.log("STATUS", statuss);
  return Response.json({ statuss });
};
