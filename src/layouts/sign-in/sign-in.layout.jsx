import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { BarsSpinner } from "react-spinners-kit";

//ACTIONS
import { googleSignInStart } from "../../app/session/session.actions.js";

//SELECTORS
import { selectIsLoading } from "../../app/session/session.selectors";

//STYLES
import {
  SignInContainer,
  SignInBlock,
  ErrorMessage,
} from "./sign-in.styles.js";

const SignIn = ({ errorMessage, googleSignInStart, isLoading }) => {
  const googleSignIn = (event) => {
    event.preventDefault();
    googleSignInStart();
  };

  if (isLoading) {
    return (
      <SpinnerContainer>
        <BarsSpinner size={20} color='#421f44' loading={isLoading} />
      </SpinnerContainer>
    );
  } else {
    return (
      <SignInContainer>
        <SignInBlock>
          <img
            src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg'
            alt=''
          />
          <h1>Sign in to iKishi HQ</h1>
          <p>ikishi.slack.com</p>

          <Button onClick={googleSignIn}>Sign in with Google</Button>
          {errorMessage && (
            <ErrorMessage>
              <p>{errorMessage}</p>
            </ErrorMessage>
          )}
        </SignInBlock>
      </SignInContainer>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

const SpinnerContainer = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
`;
