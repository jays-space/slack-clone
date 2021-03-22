import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

//ACTIONS
import { authenticationStart } from "./app/session/session.actions";

//SELECTORS
import {
  selectCurrentUser,
  selectErrorMessage,
} from "./app/session/session.selectors";

// COMPONENTS
import Header from "./layouts/header/header.layout.jsx";
import SideBar from "./layouts/side-bar/side-bar.layout.jsx";
import ChatSection from "./layouts/chat-section/chat-section.layout.jsx";
import SignIn from "./layouts/sign-in/sign-in.layout.jsx";

class App extends React.Component {
  componentDidMount() {
    const { checkUserAuth } = this.props;
    checkUserAuth();
  }

  render() {
    const { currentUser, errorMessage } = this.props;

    return (
      <div className='app'>
        <Router>
          {!currentUser ? (
            <SignIn errorMessage={errorMessage} />
          ) : (
            <>
              <Header />
              <AppContentContainer>
                <SideBar />
                <Switch>
                  <Route exact path='/'>
                    {/* Chat */}
                    <ChatSection />
                  </Route>
                </Switch>
              </AppContentContainer>
            </>
          )}
        </Router>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  errorMessage: selectErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserAuth: () => dispatch(authenticationStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

const AppContentContainer = styled.div`
  display: flex;
  height: 100vh;
`;
