import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div> Select a scong to see the song details</div>;
  }
  return (
    <div>
      <h3>Details For:</h3>
      <p>
        Title: <b>{selectedSong.title}</b> <br />
        Duration: {selectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedSong: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
