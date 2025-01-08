import React from "react";
import { useState } from "react";

function App() {
  // useState Advanced
  const [val, updateVal] = useState({ name: "Ankit", isBanned: false });
  return (
    <div className="h-screen w-full bg-zinc-300 flex flex-col items-center justify-center ">
      <div className="p-2 bg-zinc-100 rounded-lg">
        <h1>Name : {val.name}</h1>
        <h1>isBanned : {val.isBanned.toString()}</h1>
        <button
          onClick={() =>
            updateVal({ ...val, isBanned: !val.isBanned, name: "ankit" })
          }
          className={`text-xs rounded-full text-white px-2 py-1 ${
            val.isBanned ? "bg-blue-500" : "bg-red-500"
          }`}
        >
          change
        </button>
      </div>
    </div>
  );
}
export default App;
