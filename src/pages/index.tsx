import {
  ADD,
  DELETE,
  UPDATE,
  addTodo,
  deleteTodo,
  updateTodo,
} from "@/store/actions";
import { store } from "@/store/store";
import Link from "next/link";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import styled from "styled-components";

const SkeletonHome = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Public Sans;
  font-size: 11px;
  font-weight: 700;
  line-height: 18px;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export default function Home() {
  // const newTodo = {
  //   id: 2,
  //   text: "Test todo",
  //   completed: false,
  //   color: "green",
  // };
  // const dispatch = useDispatch();

  // dispatch(addTodo({}));
  // dispatch(deleteTodo(id));
  // dispatch(updateTodo());

  // return null;

  return (
    <Provider store={store}>
      <SkeletonHome>
        <div>
          <div>HOMEPAGE</div>
          <div>
            <Link href={"auth/login/loginPage"}>Auth</Link>
          </div>
          <Link href={"overview"}>Overview</Link>
        </div>
      </SkeletonHome>
    </Provider>
  );
}
