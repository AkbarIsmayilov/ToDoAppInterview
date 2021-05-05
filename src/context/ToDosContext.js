import React, { useState, createContext, useEffect } from "react";

export const ToDosContext = createContext();

const ToDosProvider = ({ children, initialState }) => {
  const [todos, setTodos] = useState(initialState);

  return (
    <ToDosContext.Provider value={[todos, setTodos]}>
      {children}
    </ToDosContext.Provider>
  );
};

export default ToDosProvider;
