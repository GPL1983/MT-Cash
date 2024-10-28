import React from "react";
import "./alertdanger.css";

const AlertDanger: React.FC = () => {
  return (
    <>
      <div className="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>
    </>
  );
};

export default AlertDanger;
