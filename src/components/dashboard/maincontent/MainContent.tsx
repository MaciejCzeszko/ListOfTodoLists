import { getAuth } from "firebase/auth";
import { useGetUsersLists } from "../../../hooks/useGetUsersLists";
import Card from "../../Card";
import { useState } from "react";
import { ListAddModal } from "./ListAddModal";

export function MainContent() {
  const { listsArr, loading, error } = useGetUsersLists(
    getAuth().currentUser?.uid as string
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                    className="my-2 text-lg font-bold px-4 py-4 rounded-lg shadow-md flex items-center hover:bg-gray-200 hover:cursor-pointer"
                  >
                    {list.listName}
                  </li>
                );
              })
            )}
            <li
              className="my-2 text-lg font-bold px-8 py-8 rounded-lg shadow-md  hover:bg-gray-200 hover:cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              +
            </li>
          </ul>
        </Card>
        <Card>TodoList</Card>
        <ListAddModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </main>
    </>
  );
}
