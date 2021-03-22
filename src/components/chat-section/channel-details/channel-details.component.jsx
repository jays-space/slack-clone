import React from "react";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

//STYLES
import {
  ChannelDetailsContainer,
  ChannelDetails,
  ChannelName,
} from "./channel-details.styles.js";

const ChannelInfo = ({ channelDetails: { channelName } }) => {
  return (
    <ChannelDetailsContainer>
      <ChannelName>
        <h4>
          <strong>#{channelName}</strong>
        </h4>
        <StarBorderOutlinedIcon />
      </ChannelName>

      <ChannelDetails>
        <p>
          <InfoOutlinedIcon /> Details
        </p>
      </ChannelDetails>
    </ChannelDetailsContainer>
  );
};

export default ChannelInfo;
