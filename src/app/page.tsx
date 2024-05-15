import FormTodo from "@/app/form/FormTodo";
import { getList } from "@/server/posts";
import HomePage from ".";

export default async function Home() {
  let dataList: any = await getList();
  return (
    <main className="">
      {/* <FormTodo data={dataList}></FormTodo> */}
      <HomePage data={dataList}></HomePage>
    </main>
  );
}
