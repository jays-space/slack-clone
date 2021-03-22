import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//SELECTORS
import {
  selectLoading,
  selectChannelMessages,
} from "../../../app/chat-manager/chat-manager.selectors.js";

//COMPONENTS
import ChannelInfo from "../channel-details/channel-details.component";
import Messages from "../messages/messages.component";
import ChatInput from "../chat-input/chat-input.component";

//STYLES
import {
  ChatSectionContainer,
  ChatBottom,
} from "../../../layouts/chat-section/chat-section.styles.js";

const Chat = ({ channelDetails, channelID, messages, isLoading }) => {
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [channelID, isLoading, messages]);

  return (
    <ChatSectionContainer>
      <ChannelInfo channelDetails={channelDetails} />
      {messages?.map(({ id, ...messageProps }) => {
        return <Messages key={id} {...messageProps} />;
      })}
      <ChatInput
        channelName={channelDetails.channelName}
        channelID={channelID}
      />
      <ChatBottom ref={chatRef} />
    </ChatSectionContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  messages: selectChannelMessages,
  isLoading: selectLoading,
});

export default connect(mapStateToProps)(Chat);
