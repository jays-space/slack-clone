import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

//SELECTORS
import { selectCurrentUser } from "../../../../app/session/session.selectors.js";

//STYLES
import { UserInfo as Info } from "./info.styles.js";

const UserInfo = ({ user: { displayName } }) => {
  return (
    <>
      <Info>
        <h2>iKISHI HQ</h2>
        <h3>
          <FiberManualRecordIcon />
          {displayName}
        </h3>
      </Info>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(UserInfo);
