import React from "react";

//COMPONENTS
import UserSection from "../../components/side-bar/user/user.component";
import Options from "./options/options.layout";

//STYLES
import { SideBarContainer } from "./side-bar.styles.js";

const SideBar = () => {
  return (
    <SideBarContainer>
      {/* User information */}
      <UserSection />

      {/* Options */}
      <Options />
    </SideBarContainer>
  );
};

export default SideBar;
