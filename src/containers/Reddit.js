import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  createRedditBrowser,
  fetchSubReddit
} from "../store/actions/redditActions";

class Reddit extends Component {
  componentDidMount() {
    this.props.createRedditBrowser(this.props.id);
    this.props.fetchSubReddit({
      id: this.props.id,
      token: this.props.redditAuth
    });
  }

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        <Title>Reddit Browser</Title>
        Currently I'm working on the API portion for this app and the front-end
        is not yet complete.
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.id,
    redditAuth: state.auth.reddit.token
  };
};

export default connect(
  mapStateToProps,
  { createRedditBrowser, fetchSubReddit }
)(Reddit);

const Title = styled.h6`
  font-weight: bold;
`;
