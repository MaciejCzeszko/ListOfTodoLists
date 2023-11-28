import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

type ResponseData = {
  id: string;
  [key: string]: any;
};

export function useGetUsersLists(userId: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [listsArr, setListsArr] = useState<Array<ResponseData> | null>(null);

  useEffect(() => {
    setLoading(true);
    getData(userId)
      .then(() => setLoading(false))
      .catch((err) => setError(err.code));
  }, [userId]);

  async function getData(id: string) {
    const docRef = await getDocs(collection(db, "listoflists"));
    const response: Array<ResponseData> = [];
    docRef.forEach((doc) => {
      if (doc.data().createdBy === id || doc.data().users.includes(id))
        response.push({ id: doc.id, ...doc.data() });
    });
    setListsArr(response);
  }

  return { listsArr, loading, error };
}
