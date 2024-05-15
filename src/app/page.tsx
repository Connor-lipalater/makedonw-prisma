import FormTodo from "@/components/form/FormTodo";
import { getList } from "@/server/posts";

export default async function Home() {
  let dataList: any = await getList();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormTodo data={dataList}></FormTodo>
    </main>
  );
}
