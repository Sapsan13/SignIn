"use client";
import { swagTotalIncome } from "@/store/actions/authActions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const SwagTotalIncome = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((store: any) => store.auth.token);

  useEffect(() => {
    dispatch(swagTotalIncome(token));
  }, [dispatch, token]);

  if (!token) {
    router.push("/swag/login");
  }

  return null;
};

export default SwagTotalIncome;
