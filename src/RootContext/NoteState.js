import React, { useState, useEffect } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const prevAuth = window.localStorage.getItem("auth") || false;
  const prevUser = JSON.parse(window.localStorage.getItem("user")) || null;

  const [authToken, setAuthToken] = useState(prevAuth);
  const [currentUser, setCurrentUser] = useState(prevUser);

  useEffect(
    () => {
    
      if (!authToken) window.localStorage.clear();
      else window.localStorage.setItem('auth', authToken);

     
      if (!currentUser) localStorage.clear();
      else window.localStorage.setItem('user', JSON.stringify(currentUser));

     
    },
    [  authToken, currentUser]
  );

  const defaultContext = {
    currentUser,
    setCurrentUser,
    authToken,
    setAuthToken,
    };
  return (
    <NoteContext.Provider value={defaultContext}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
