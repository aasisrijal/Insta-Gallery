import React, { useState } from "react";

import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import UploadForm from "./components/UploadForm";

function App() {
  const [selectImg, setSelectImg] = useState(null);
  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid setSelectImg={setSelectImg} />
      {selectImg && <Modal selectImg={selectImg} setSelectImg={setSelectImg} />}
    </div>
  );
}

export default App;
