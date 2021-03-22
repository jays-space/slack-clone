import React from "react";

//COMPONENTS
import UserSection from "../../components/header/user-section/user-section.component";
import SearchBar from "../../components/header/search-bar/search-bar.component";
import SupportSection from "../../components/header/support-section/support.component";

//STYLES
import { Header as HeaderContainer } from "./header.styles.js";

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        {/* User info section */}
        <UserSection />

        {/* Search bar section */}
        <SearchBar />

        {/* Support section */}
        <SupportSection />
      </HeaderContainer>
    </div>
  );
};

export default Header;
