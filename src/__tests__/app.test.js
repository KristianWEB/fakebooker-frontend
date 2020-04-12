import React from "react";
import { render } from "@testing-library/react";
import Test from "../components/Test/Test";

test("contains a specific message", () => {
  // Arrange ( render )
  const { getByText } = render(<Test />);

  // Act ( fire events, user actions)

  // Assert
  expect(getByText("test")).toBeInTheDocument();
});
