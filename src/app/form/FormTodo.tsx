"use client";
import { insert, deleteItem } from "@/server/posts";
import React from "react";
import InsertButton from "./InsertButton";

type VerificationToken = {
  identifier: string;
  token: string;
  expires: string;
};
const FormTodo = ({ data }: { data: VerificationToken[] }) => {
  const insertPost = async (formDate: FormData) => {
    const title = formDate.get("title");
    let object = await insert(title as string);
    console.log(object?.error);
    alert(object?.error);
  };
  const handleDeleteItem = async (item: VerificationToken) => {
    console.log(typeof item.token);
    let object = await deleteItem(item.token as string);
    console.log(object);
  };

  return (
    <>
      <form action={insert}>
        <input type="text" name="title" id="" />
        <InsertButton>Insert</InsertButton>
      </form>
      <div>
        {data.map((item: VerificationToken) => {
          return (
            <li key={item.token} className="flex justify-between w-[200px]">
              <span>{item.identifier}</span>
              <span
                className=" cursor-pointer"
                onClick={() => handleDeleteItem(item)}
              >
                Delete
              </span>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default FormTodo;
