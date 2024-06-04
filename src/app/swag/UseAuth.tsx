import { useSelector } from "react-redux";

export const useGetAuthToken = () =>
  useSelector((store: any) => store.auth.token);
