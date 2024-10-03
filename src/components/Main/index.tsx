import React from "react";
import "./style.css";

type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <main className="main-content">
      <div className="background-image" />
      <div className="content">{children}</div>
    </main>
  );
};

export default Main;