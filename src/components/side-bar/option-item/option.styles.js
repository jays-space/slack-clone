import styled from "styled-components";

export const OptionItemContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

export const OptionChannel = styled.h3`
  padding: 12px 0;
  padding-left: 20px;
  font-weight: 300;
`;
