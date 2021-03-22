import React from "react";
import { connect } from "react-redux";

//ACTIONS
import {
  addChannelStart,
  setChannelID,
} from "../../../app/chat-manager/chat-manager.actions.js";

//STYLES
import { OptionItemContainer, OptionChannel } from "./option.styles.js";

const Option = ({
  Icon,
  title,
  id,
  addChannelOption,
  addChannelStart,
  setChannelID,
}) => {
  const addChannel = () => {
    const channelName = prompt("Please enter channel name");

    if (channelName) {
      addChannelStart(channelName);
    }
  };

  const selectChannel = () => {
    if (id) {
      setChannelID(id);
    }
  };

  return (
    <OptionItemContainer
      onClick={addChannelOption ? addChannel : selectChannel}>
      {/* when Icon exist, render Icon as follows */}
      {Icon && <Icon fontSize='small' style={{ padding: 10 }} />}

      {/* if Icon exist, render the following */}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <OptionChannel>
          <span>#</span> {title}
        </OptionChannel>
      )}
    </OptionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addChannelStart: (channelName) => dispatch(addChannelStart(channelName)),
  setChannelID: (channelID) => dispatch(setChannelID(channelID)),
});

export default connect(null, mapDispatchToProps)(Option);
