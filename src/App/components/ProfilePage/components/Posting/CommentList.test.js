import React from "react";
import { render } from "@testing-library/react";
import CommentList from "./CommentList";
import { comments, withLastComment } from "./Comment.stories";

it("renders the newest comment at the end of the list", () => {
  const { container } = render(<CommentList comments={withLastComment} />);

  const lastComment = container.lastChild.querySelectorAll("span")[2].innerHTML;

  expect(lastComment).toBe("(Last Comment)");
});
