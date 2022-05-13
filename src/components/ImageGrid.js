import React from "react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setSelectImg }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

ImageGrid.propTypes = {
  setSelectImg: PropTypes.func,
}

export default ImageGrid;
