import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Button from "@material-ui/core/Button";

//ACTIONS
import { sendMessageStart } from "../../../app/chat-manager/chat-manager.actions.js";

//SELECTORS
import { selectCurrentUser } from "../../../app/session/session.selectors";

//STYLES
import { ChatInputContainer } from "./chat-input.styles.js";

const ChatInput = ({
  channelName,
  channelID,
  sendMessageStart,
  currentUser: { displayName, photoURL },
}) => {
  const [input, setInput] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();

    sendMessageStart({
      message: input,
      channelID: channelID,
      displayName,
      photoURL,
    });
    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          placeholder={`Message #${channelName}`}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button hidden type='submit' onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessageStart: ({ message, channelID, displayName, photoURL }) =>
    dispatch(sendMessageStart({ message, channelID, displayName, photoURL })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);
