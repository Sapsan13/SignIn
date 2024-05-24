"use client";
import {
  swagStatistics,
  swagTotalIncome,
} from "@/store/actions/swaggerActions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const SwagTotalIncome = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((store: any) => store.auth.token);

  useEffect(() => {
    if (!token) return router.push("/swag/login");
    console.log(`token => `, token);
    dispatch(swagTotalIncome(token));
  }, [dispatch, router, token]);

  const total = useSelector((store: any) => {
    return store.swagger.totIncome;
  });

  // console.log("totalT");
  // console.log(total);

  if (!total) return null;
  return total.map((item: any) => (
    <div key={item.name}>
      <p>{item.name}</p> <p>{item.uv}</p> <p>{item.pv}</p> <p>{item.amt}</p>
    </div>
  ));
};
export default SwagTotalIncome;
