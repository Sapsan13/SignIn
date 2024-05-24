"use client";
import { swagStatistics } from "@/store/actions/swaggerActions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const SwagStatistics = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((store: any) => store.auth.token);

  useEffect(() => {
    if (!token) return router.push("/swag/login");
    console.log(`token => `, token);
    dispatch(swagStatistics(token));
  }, [dispatch, router, token]);

  const stat = useSelector((store: any) => {
    return store.swagger.statistics;
  });

  // console.log("STATS");
  // console.log(stat);

  if (!stat) return null;
  return stat.map((item: any) => (
    <div key={item.name}>
      <p>{item.name}</p> <p>{item.uv}</p> <p>{item.pv}</p> <p>{item.amt}</p>
    </div>
  ));
};
export default SwagStatistics;
