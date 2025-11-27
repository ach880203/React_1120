import { useEffect, useState } from "react";
import "./App.css";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(" ");

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  /* Log count updates 
       [] : App.js 컴포트런트가 로딩
  */

  useEffect(() => {
    console.log("Count update:" + count);
  }, [count]);

  return (
    <div className="App">
      <h1>Simple Counter</h1>

      <section>
        <input type="text" value={text} onChange={handleChangeText} />
      </section>

      <section>
        <Viewer count={count} />
      </section>

      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
