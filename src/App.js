import React, { useEffect } from "react";
import "./App.css";
import ToDoContainer from "./components/ToDoContainer/ToDoContainer";
import EditProvider, { EditContext } from "./context/EditContext";
import ToDosProvider from "./context/ToDosContext";

export const App = () => {
  let initialState = JSON.parse(localStorage.getItem("todos"));

  // useEffect(() => {
  //   const localTodos = JSON.parse(localStorage.getItem("todos"));
  //   console.log(localTodos);
  //   initialState = localTodos && [
  //     { id: 1, body: "think algorithm ", isDone: false },
  //     { id: 2, body: "write a program  ", isDone: false },
  //     { id: 3, body: "feed pets", isDone: false },
  //     { id: 4, body: "do exercise", isDone: false },
  //   ];
  // });

  return (
    <ToDosProvider initialState={initialState}>
      <EditProvider>
        <div className="App">
          <ToDoContainer />
        </div>
      </EditProvider>
    </ToDosProvider>
  );
};

export default App;
