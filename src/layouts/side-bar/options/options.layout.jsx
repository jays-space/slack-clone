import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

//ACTIONS
import { getChannelsCollectionsStart } from "../../../app/chat-manager/chat-manager.actions.js";

//SELECTORS
import {
  selectChannels,
  selectError,
} from "../../../app/chat-manager/chat-manager.selectors.js";

//COMPONENTS
import Option from "../../../components/side-bar/option-item/option.components";

//STYLES
import { OptionsContainer } from "./options.styles.js";

const SideBar = ({ channels, errorMessage, getChannels }) => {
  useEffect(() => {
    getChannels();

    if (errorMessage) {
      alert(errorMessage);
    }
  }, [errorMessage, getChannels]);

  return (
    <OptionsContainer>
      {/* Options */}
      <Option Icon={InsertCommentIcon} title='Threads' />
      <Option Icon={InboxIcon} title='Mentions & Reactions' />
      <Option Icon={DraftsIcon} title='Saved Items' />
      <Option Icon={BookmarkBorderIcon} title='Channel Browser' />
      <Option Icon={PeopleAltIcon} title='People & User Groups' />
      <Option Icon={AppsIcon} title='Apps' />
      <Option Icon={FileCopyIcon} title='File Browser' />
      <Option Icon={ExpandLessIcon} title='Show Less' />
      <hr />
      <Option Icon={ExpandMoreIcon} title='Channels' />
      <hr />
      <Option Icon={AddIcon} addChannelOption title='Add Channel' />
      {!channels.length <= 0 ? (
        channels?.map(({ id, channelName }) => {
          return <Option key={id} id={id} title={channelName} />;
        })
      ) : (
        <p>Oops...You're going to have to add a channel</p>
      )}
    </OptionsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  channels: selectChannels,
  errorMessage: selectError,
});

const mapDispatchToProps = (dispatch) => ({
  getChannels: () => dispatch(getChannelsCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
