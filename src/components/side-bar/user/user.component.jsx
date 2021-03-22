import React from "react";
import CreateIcon from "@material-ui/icons/Create";

//COMPONENTS
import UserInfo from "../user/info/info.component";

//STYLES
import { UserSectionContainer } from "./user.styles.js";

const UserSection = () => {
  return (
    <UserSectionContainer>
      <UserInfo />
      <CreateIcon />
    </UserSectionContainer>
  );
};

export default UserSection;
