import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "We Found Love", duration: "3:45" },
    { title: "Smells Like Teen Spirit", duration: "4:37" },
    { title: "Imagine", duration: "4:05" },
    { title: "I Will Always Love You", duration: "4:02" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
