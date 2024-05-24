"use client";
import { swagTours } from "@/store/actions/swaggerActions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const SwagTours = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((store: any) => store.auth.token);

  useEffect(() => {
    if (!token) return router.push("/swag/login");
    // console.log(`token => `, token);
    dispatch(swagTours(token));
  }, [dispatch, router, token]);

  const tours = useSelector((store: any) => {
    // console.log(store.swagger.tours);
    return store.swagger.tours;
  });

  if (!tours) return null;
  return tours.map((item: any) => (
    <div key={item.name}>
      <p>{item.name}</p> <p>{item.value}</p>
    </div>
  ));
};
export default SwagTours;
