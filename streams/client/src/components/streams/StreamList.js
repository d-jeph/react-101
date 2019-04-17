import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchStreams } from "../../actions";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(currentStream) {
    if (currentStream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link
            className="ui button primary "
            to={`/streams/edit/${currentStream.id}`}
          >
            {" "}
            Edit{" "}
          </Link>
          <Link
            className="ui button negative"
            to={`/streams/delete/${currentStream.id}`}
          >
            {" "}
            Delete{" "}
          </Link>
        </div>
      );
    }
  }

  renderStreamList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <div> {this.renderAdmin(stream)} </div>
          <i className=" large middle aligned icon camera "> </i>
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header ">
              {stream.title}
            </Link>
            <div className="description"> {stream.description} </div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button positive">
            {"Create Stream"}
          </Link>
        </div>
      );
    }
  }

  render() {
    console.log(this.props.streams);

    return (
      <div>
        <h2> Streams</h2>
        {this.renderCreate()}
        <div className="ui celled list"> {this.renderStreamList()} </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }; //convert objects to array of objects
};

export default connect(
  mapStateToProps,
  { fetchStreams } //pass action creator as props
)(StreamList);
