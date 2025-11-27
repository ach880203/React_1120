import React from "react";

const Viewer = (props) => {

    console.log("Viewer 렌더링");

  return (
    <div>
      <div>현재 카운터 : </div>

      <h1>{props.count}</h1>
    </div>
  );
};

export default Viewer;
