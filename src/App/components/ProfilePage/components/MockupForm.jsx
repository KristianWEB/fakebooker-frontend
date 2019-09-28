import React from "react";
import { Input, Button } from "antd";

const { TextArea } = Input;

const MockupForm = () => (
  <form
    style={{
      display: "flex",
      flexDirection: "column",
      width: "33%",
      margin: "0 auto"
    }}
  >
    <TextArea rows={4} placeholder="Post Message" />
    <Button
      style={{
        alignSelf: "flex-end",
        justifySelf: "flex-end",
        margin: "1em 0"
      }}
    >
      Post
    </Button>
  </form>
);

export default MockupForm;
