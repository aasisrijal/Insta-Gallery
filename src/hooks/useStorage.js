import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { projStorage, projFirestore, timestamp } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // References to file
    const storageRef = projStorage.ref(file.name);
    const collectionRef = projFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percent = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percent);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createAt = timestamp();
        collectionRef.add({ url, createAt });
        setUrl(url);
      }
    );
  }, [file]);
  return { progress, url, error };
};

useStorage.propTypes = {
  file: PropTypes.string,
}

export default useStorage;
