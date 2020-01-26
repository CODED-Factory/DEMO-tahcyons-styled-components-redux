import React from "react";

const Home = () => {
  const elements = Array.from({ length: 100 }, (_, idx) => (
    <p key={"content" + idx}>Content element #{idx + 1}</p>
  ));
  return (
    <>
      <h1>HOME PAGE</h1>
      {elements}
      <a
        className="f6 link dim br2 ph3 pv2 mb2 dib white bg-black"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </>
  );
};

export default Home;
