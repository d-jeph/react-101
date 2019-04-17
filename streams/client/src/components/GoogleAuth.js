import React, { Component } from "react";
import { connect } from "react-redux";

import GoogleButton from "./GoogleButton";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          //callback to initialize the client
          clientId:
            "956631501779-tmbpbdq5mschflv94qrr0k4kgm8tt1f0.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          //after promise is done
          this.auth = window.gapi.auth2.getAuthInstance(); //get auth google auth object
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange); //listens to anytime the user's authentication changes
        });
    });
  }

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <GoogleButton buttonText="Sign Out" onClick={this.onSignOutClick} />
      );
    } else {
      return (
        <GoogleButton
          buttonText="Sign In With Google"
          onClick={this.onSignInClick}
        />
      );
    }
  }

  render() {
    return <div> {this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
