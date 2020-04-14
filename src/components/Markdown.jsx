import React from "react";
import ReactMarkdown from "react-markdown";

const input = `
# this is really cool
`;

const Markdown = () => {
  return (
    <div style={{ fontSize: "2rem" }}>
      <ReactMarkdown source={input} />
    </div>
  );
};

export default Markdown;
