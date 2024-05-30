"use client";
import { useGetApiChartTours } from "@/QueryStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const SwagTours = () => {
  const router = useRouter();
  const { data, error, isSuccess } = useGetApiChartTours();
  const token = useSelector((store: any) => store.auth.token);

  useEffect(() => {
    if (!token) return router.push("/swag/login");
  }, [router, isSuccess, token]);

  if (error) {
    console.log(error);
  }

  if (!data) return <p>loading....</p>;

  // if (!data) return null;
  return data.map((item) => (
    <div key={item.name}>
      <p>{item.name}</p> <p>{item.value}</p>
    </div>
  ));
};
export default SwagTours;
