import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

export const UserSectionContainer = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
  max-width: 260px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
