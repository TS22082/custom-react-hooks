import React, { useEffect } from "react";

const New = () => {
  
  useEffect(() => {
    console.log("hi");
    return () => {
      console.log("bye");
    };
  });

  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};

export default New;
