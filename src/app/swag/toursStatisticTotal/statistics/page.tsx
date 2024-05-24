"use client";
import { swagStatistics } from "@/store/actions/authActions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const SwagStatistics = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((store: any) => store.auth.token);

  useEffect(() => {
    dispatch(swagStatistics(token));
  }, [dispatch, token]);

  if (!token) {
    router.push("/swag/login");
  }

  return null;
};
export default SwagStatistics;
