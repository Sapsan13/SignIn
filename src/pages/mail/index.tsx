import axios from "axios";
import { useEffect } from "react";

const api = axios.create({ baseURL: `http://localhost:3000/api/hello/` });

const Mail = () => {
  useEffect(() => {
    api.get("/").then((res) => {
      console.log(res.data);
    });
  }, []);
  return <div>Mail</div>;
};
export default Mail;
