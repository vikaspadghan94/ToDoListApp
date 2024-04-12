import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // let [todolist, setToDoList]= useState([])
  let [todolist, setToDoList] = useState([]);

  let saveToDoList = (Event) => {
    let toname = Event.target.toname.value;
    // alert(toname)
    if (!todolist.includes(toname)) {
      let finalDolist = [...todolist, toname];
      setToDoList(finalDolist);
    } else {
      alert("Allready Exists...");
    }

    Event.preventDefault();
  };

let list = todolist.map((value, index) => {
  return(
    <ToDoListItems value={value} key={index} indexNumber = {index}
    todolist= {todolist}
    setToDoList = {setToDoList}

    />

  )
})

  return (
    <div className="App">
      <h1>To Do List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname" />
        <button>save</button>
      </form>
      <div className="outerDiv">
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItems({value, indexNumber, todolist, setToDoList}) {

  let [status, setStatus] = useState(false)
let deleteRow =()=>{
  // alert(indexNumber)
let finalData= todolist.filter((v,i)=> i!= indexNumber)
// console.log(finalData);
setToDoList(finalData)

}
let checkStatus=()=>{
  setStatus(!status)
}

  return(
  <li className={(status)? 'complete' : ''} onClick={checkStatus}>{indexNumber+1}  {value} <span onClick={deleteRow}>&times;</span></li>
)
}
