import React from "react";
import styled from "styled-components";
import profileImage from "../../images/jesus.jpg";

const ProfileImageContainer = styled.div`
  width: 150px; /* Adjust the size of the circular profile pic */
  height: 150px;
  border-radius: 50%; /* Make it circular */
  background: white; /* Background color for the circle */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px; /* Add margin to separate it from links */
`;

const ProfileImage = styled.img`
  width: 200%; /* Adjust the image size */
  height: 200%;
  border-radius: 50%; /* Make sure the image stays circular */
  object-fit: cover;
`;

const ProfilePicture = () => {
  return (
    <ProfileImageContainer>
      <ProfileImage src={profileImage} alt="Profile" />
    </ProfileImageContainer>
  );
};

export default ProfilePicture;


