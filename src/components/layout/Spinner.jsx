import React from "react";

function Spinner() {
  return (
    <div className="container mt-12 flex w-100%">
      <div className="lds-default m-auto text-center h-28 ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
