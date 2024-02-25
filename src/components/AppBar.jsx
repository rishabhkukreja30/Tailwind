import React from "react";
import SearchBar from "./SearchBar";

const AppBar = () => {
  return (
    <div className="flex justify-between p-2 text-center">
      <div className="text-md inline-flex">Youtube</div>
      <div>
        <SearchBar />
      </div>
      <div>Sign In</div>
    </div>
  );
};

export default AppBar;
