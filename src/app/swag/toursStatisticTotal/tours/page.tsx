"use client";
import { swagTours } from "@/store/actions/authActions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const SwagTours = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((store: any) => store.auth.token);

  useEffect(() => {
    if (!token) return router.push("/swag/login");

    dispatch(swagTours(token));
  }, [dispatch, router, token]);

  return null;
};

export default SwagTours;
