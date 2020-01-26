import React from "react";

import articles from "./data";

const Home = () => {
  const articleCards = articles.map(article => (
    <pre
      key={article.id}
      style={{
        display: "block",
        maxWidth: "60%",
        whiteSpace: "pre-wrap",
        padding: 20
      }}
    >
      {JSON.stringify(article, undefined, 2)}
    </pre>
  ));
  return (
    <>
      <h1>ARTICLES</h1>
      {articleCards}
    </>
  );
};

export default Home;
