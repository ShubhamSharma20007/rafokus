import React from "react";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";

const App = () => {
  return (
    <div>
      <div className="w-full min-h-screen bg-zinc-900 ">
        <Navbar />
        <Work/>
      </div>
    </div>
  );
};

export default App;
