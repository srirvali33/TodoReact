import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const initlist = ["tomatoes", "potatoes", "milk"];

  let [todoList, setTodoList] = useState(initlist);
  let [tempList, setTempList] = useState([]);

  // useEffect(() => {
  //   setTodoList(initlist);
  // }, []);

  function addItem(event) {
    let tar = event.target.value;
    setTempList(tar);
  }

  function addToList() {
    setTodoList(todoList.concat(tempList));
    setTempList([]);
  }

  function removeFromList(item) {
    let lis = todoList;
    let ok = item;
    var res = lis.filter((it) => {
      return String(it) !== String(ok);
    });
    setTodoList(res);
  }

  return (
    <div className="App">
      <div className="note">
        {todoList &&
          todoList.map((item) => {
            let it = { item };
            return (
              <>
                <h5 className="indent">{item}</h5>
                <button onClick={() => removeFromList(it)}>X</button>
              </>
            );
          })}
      </div>

      <div className="input">
        <input type="text" onChange={addItem} value={tempList} />
        <button onClick={addToList}>add </button>
      </div>
    </div>
  );
}
