import React from "react";
import { connect } from 'react-redux';
const SongDetails = (state) => {
    console.log(state)
    return <div>{state.song}</div>;
};
const mapstatetoprops =( state ) => {
    return {song:state.selectedSong}
};
export default connect(mapstatetoprops)(SongDetails);