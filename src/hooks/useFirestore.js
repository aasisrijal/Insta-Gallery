import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { projFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projFirestore
      .collection(collection)
      .orderBy("createAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });

        setDocs(documents);
      });

    // For unmounting the image grids
    return () => unsub();
  }, [collection]);

  return { docs };
};

useFirestore.propTypes = {
  collection: PropTypes.string,
}

export default useFirestore;
