import React, { useEffect, useState } from "react";
import grapesjs from "grapesjs";
const App = () => {
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
    });
    setEditor(editor);
  }, []);
  return (
    <div>
      <div id="editor"></div>
    </div>
  );
};

export default App;
