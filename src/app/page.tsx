import { getList } from "@/server/posts";
import HomePage from ".";

export default async function Home() {
  let dataList: any = await getList();
  return (
    <main className="">
      <HomePage data={dataList}></HomePage>
    </main>
  );
}
