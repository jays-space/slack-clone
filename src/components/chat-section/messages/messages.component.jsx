import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//SELECTORS
import { selectCurrentUser } from "../../../app/session/session.selectors";

//STYLES
import { MessagesContainer, MessageInfo } from "./messages.styles.js";

const Messages = ({
  message,
  timestamp,
  currentUser: { displayName, photoURL },
}) => {
  return (
    <MessagesContainer>
      <img src={photoURL} alt='' />
      <MessageInfo>
        <h4>
          {displayName}{" "}
          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessagesContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Messages);
