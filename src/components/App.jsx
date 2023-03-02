import React from "react";
import emojipedia from "../emojipedia";
import CreateCard from "./CreateCard";
import Title from "./Title";

function App() {
  return (
    <div>
      <Title />
      <dl className="dictionary">{emojipedia.map(CreateCard)}</dl>
    </div>
  );
}

export default App;
