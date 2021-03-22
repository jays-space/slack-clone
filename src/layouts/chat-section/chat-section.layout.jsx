import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

//ACTIONS
import { getChannelDetailsStart } from "../../app/chat-manager/chat-manager.actions.js";

//SELECTORS
import {
  selectChannelID,
  selectChannelDetails,
  selectLoading,
  selectChannelMessages,
} from "../../app/chat-manager/chat-manager.selectors.js";

//COMPONENTS
import Chat from "../../components/chat-section/chat/chat.component";

//STYLES
import { ChatSectionContainer, Center } from "./chat-section.styles.js";

const ChatWithSpinner = WithSpinner(Chat);

const ChatSection = ({
  channelID,
  getChannelDetailsStart,
  channelDetails,
  isLoading,
}) => {
  useEffect(() => {
    if (channelID) {
      getChannelDetailsStart(channelID);
    }
  }, [channelID, getChannelDetailsStart]);

  if (channelID) {
    return (
      <ChatWithSpinner
        channelDetails={channelDetails}
        channelID={channelID}
        isLoading={isLoading}
      />
    );
  } else {
    return (
      <ChatSectionContainer>
        <Center>
          <p>Please select a channel</p>
        </Center>
      </ChatSectionContainer>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  channelID: selectChannelID,
  channelDetails: selectChannelDetails,
  messages: selectChannelMessages,
  isLoading: selectLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getChannelDetailsStart: (channelID) =>
    dispatch(getChannelDetailsStart(channelID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatSection);

// const ChatSection = ({ channelID, getChannelDetailsStart, channelDetails }) => {
//   useEffect(() => {
//     if (channelID) {
//       getChannelDetailsStart(channelID);
//     }
//   }, [channelID, getChannelDetailsStart]);

//   if (channelID) {
//     if (channelDetails) {
//       return (
//         <ChatSectionContainer>
//           <ChannelInfo channelDetails={channelDetails} />
//           <Messages />
//           <ChatInput
//             channelName={channelDetails.channelName}
//             channelID={channelID}
//           />
//         </ChatSectionContainer>
//       );
//     } else {
//       return (
//         <ChatSectionContainer>
//           <Center>
//             <p>Loading...</p>
//           </Center>
//         </ChatSectionContainer>
//       );
//     }
//   } else {
//     return (
//       <ChatSectionContainer>
//         <Center>
//           <p>Please select a channel</p>
//         </Center>
//       </ChatSectionContainer>
//     );
//   }
// };

// const mapStateToProps = createStructuredSelector({
//   channelID: selectChannelID,
//   channelDetails: selectChannelDetails,
// });
