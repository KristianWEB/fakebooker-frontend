// import React from "react";
// import { storiesOf } from "@storybook/react";
// import { MockedProvider } from "@apollo/react-testing";
// import CreatePostDefault from "./CreatePostDefault";
// import CreatePostNew from "./CreatePostNew";
// import Post from "./Post";
// import { LOAD_USER } from "../../utils/graphql/queries";

// const mocks = [
//   {
//     request: {
//       query: LOAD_USER
//     },
//     result: {
//       data: {
//         loadUser: {
//           username: "kristian",
//           token:
//             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJ1c2VyIl0sIl9pZCI6IjVkZTQxODcxNjlkNDBjNWZhMDU0Yzg0YiIsImVtYWlsIjoia3Jpc3RpYW5Aa3Jpc3RpYW4uY29tIiwidXNlcm5hbWUiOiJrcmlzdGlhbiIsImRpc3BsYXlOYW1lIjoia3Jpc3RpYW4iLCJjb3ZlckltYWdlIjoiaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS93M2ltYWdlcy9hdmF0YXIyLnBuZyIsInN0YXR1cyI6eyJpc0RlYWN0aXZhdGVkIjpmYWxzZSwibGFzdEFjdGl2ZURhdGUiOjE1NzUyMjk0MTY1NTB9LCJpYXQiOjE1ODAxMjY5NjgsImV4cCI6MTU4MDczMTc2OH0.lOZ5kg0in8e1oNCG1SQErwuPyvV-lJrkOYa82ugzud0",
//           email: "kristian@kristian.com",
//           displayName: "kristian",
//           coverImage: "https://www.w3schools.com/w3images/avatar2.png",
//           status: {
//             isDeactivated: false,
//             lastActiveDate: "1575229416550"
//           }
//         }
//       }
//     }
//   }
// ];

// storiesOf("Post", module)
//   .addDecorator(story => <div style={{ margin: "3rem" }}>{story()}</div>)
//   .add("Create Post Default", () => <CreatePostDefault />)
//   .add("Create Post Active", () => (
//     <MockedProvider>
//       <CreatePostNew />
//     </MockedProvider>
//   ));
