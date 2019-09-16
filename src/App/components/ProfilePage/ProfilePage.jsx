import React from "react";
import Post from "./components/Post";
import ProfileHeader from "./components/ProfileHeader";

export default function ProfilePage() {
  return (
    <div>
      <Post />
      {/* TODO: Connect ProfileHeader to user */}
      <ProfileHeader
        coverImage="https://www.w3schools.com/w3images/avatar2.png"
        profileImage="https://www.w3schools.com/w3images/avatar2.png"
        displayName="John Doe"
      />
    </div>
  );
}
