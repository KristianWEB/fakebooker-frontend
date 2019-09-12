import React from "react";
import ProfileHeader from "./ProfileHeader";

export default function ProfilePage() {
  return (
    <div>
      {/* TODO: Connect ProfileHeader to user */}
      <ProfileHeader 
      coverImage={'https://www.w3schools.com/w3images/avatar2.png'} 
      profileImage={'https://www.w3schools.com/w3images/avatar2.png'}
      displayName="John Doe"
      />
    </div>
  );
}