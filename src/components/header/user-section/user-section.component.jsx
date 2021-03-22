import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

//ACTIONS
import { signOutStart } from "../../../app/session/session.actions";

//SELECTORS
import { selectCurrentUser } from "../../../app/session/session.selectors.js";

//STYLES
import { UserSectionContainer, HeaderAvatar } from "./user-section.styles.js";

const UserSection = ({
  currentUser: { displayName, photoURL },
  startSignOut,
}) => {
  const signOut = () => {
    startSignOut();
  };

  return (
    <UserSectionContainer>
      <HeaderAvatar src={photoURL} alt={displayName} onClick={signOut} />
      <AccessTimeIcon />
    </UserSectionContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapsDispatchToProps = (dispatch) => ({
  startSignOut: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapsDispatchToProps)(UserSection);
