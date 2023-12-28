import { useState } from "react";
import { Modal } from "../Modal";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { getAuth } from "firebase/auth";

export function ListAddModal({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [listId, setListId] = useState("");
  const [listName, setListName] = useState("");
  const [error, setError] = useState("");

  async function onAddList(e: any, listId: string) {
    e.preventDefault();
    const listDoc = await getDoc(doc(db, "listoflists", listId));
    if (listDoc.exists()) {
      const listData = listDoc.data();
      const updatedUsers = [
        ...listData.users,
        getAuth().currentUser?.uid as string,
      ];
      await updateDoc(doc(db, "listoflists", listId), {
        users: updatedUsers,
      });
    } else {
      console.log("List does not exist");
    }
  }

  async function onCreateList(e: any, listName: string) {
    e.preventDefault();
    const newDocData = {
      listName: listName,
      createdBy: getAuth().currentUser?.uid as string,
      users: [],
      columns: {
        new: [],
        InProgress: [],
        Finished: [],
      },
    };
    try {
      await addDoc(collection(db, "listoflists"), newDocData);
      setIsModalOpen(false);
    } catch (err) {
      setError("Error adding document: " + err);
    }
  }

  return (
    <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
      <div className="flex gap-8">
        <form className="flex flex-col" onSubmit={(e) => onAddList(e, listId)}>
          {error && <span>{error}</span>}
          <h3 className="text-xl">Add a list</h3>
          <label htmlFor="listName" className="mt-2">
            List Id
          </label>
          <input
            id="listName"
            type="text"
            className="border-2 border-gray-400 rounded-md"
            onChange={(e) => setListId(e.target.value)}
            value={listId}
          />
          <button className="mt-2 bg-green-500 rounded-md text-white py-1">
            Add
          </button>
        </form>
        <form
          className="flex flex-col"
          onSubmit={(e) => onCreateList(e, listName)}
        >
          {error && <span>{error}</span>}
          <h3 className="text-xl">Create a list</h3>
          <label htmlFor="listName" className="mt-2">
            List Name
          </label>
          <input
            id="listName"
            type="text"
            className="border-2 border-gray-400 rounded-md"
            onChange={(e) => setListName(e.target.value)}
            value={listName}
          />
          <button className="mt-2 bg-green-500 rounded-md text-white py-1">
            Create
          </button>
        </form>
      </div>
    </Modal>
  );
}
