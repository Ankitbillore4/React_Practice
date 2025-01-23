import React from "react";
import { useState } from "react";

const App = () => {
  const [val, setval] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <div className="p-5 ml-4 bg-red-100">
      {val.map((item) => (
        <h1>{item}</h1>
      ))}
      <button
        onClick={() =>
          setval(() => {
            return val.filter((item, index) => index != val.length - 1);
          })
        }
        className="px-4 py-1 rounded-full bg-blue-400"
      >
        click
      </button>
    </div>
  );
};

export default App;
