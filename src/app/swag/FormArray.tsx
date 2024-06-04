import { PostApiAuthRegisterBody } from "@/model";

export const formArr: {
  name: keyof PostApiAuthRegisterBody;
  htmlFor: string;
  id: string;
  type: string;
}[] = [
  { htmlFor: "firstName", id: "firstName", name: "firstName", type: "text" },
  { htmlFor: "lastName", id: "lasttName", name: "lastName", type: "text" },
  { htmlFor: "email", id: "email", name: "email", type: "email" },
  { htmlFor: "password", id: "password", name: "password", type: "password" },
];
