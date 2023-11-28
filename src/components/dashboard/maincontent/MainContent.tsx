import { getAuth } from "firebase/auth";
import { useGetUsersLists } from "../../../hooks/useGetUsersLists";
import Card from "../../Card";

export function MainContent() {
  const { listsArr, loading, error } = useGetUsersLists(
    getAuth().currentUser?.uid as string
  );

  return (
    <>
      <main className="h-screen w-screen p-4 flex flex-col gap-16">
        <Card classname="mt-32 p-2 px-8">
          <ul className="flex gap-4">
            {error && <span>{error}</span>}
            {loading ? (
              <span>Loading...</span>
            ) : (
              listsArr?.map((list) => {
                return (
                  <li
                    key={list.id}
                    className="my-2 text-lg font-bold px-4 py-4 rounded-lg shadow-md  hover:bg-gray-200 hover:cursor-pointer"
                  >
                    {list.listsName}
                  </li>
                );
              })
            )}
            <li className="my-2 text-lg font-bold px-4 py-4 rounded-lg shadow-md  hover:bg-gray-200 hover:cursor-pointer">
              Add/Create a new list...
            </li>
          </ul>
        </Card>
        <Card>TodoList</Card>
      </main>
    </>
  );
}
