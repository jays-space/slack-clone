import styled from "styled-components";

export const ChatSectionContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

export const Center = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;

  > p {
    opacity: 0.6;
  }
`;

export const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
