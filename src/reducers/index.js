import { combineReducers } from 'redux';

const songsReducer = () =>{
    return[
        {title:'koi mil gya!',duration:'4:50'},
        {title:'jaadu teri nazar!',duration:'3:00'},
        {title:'katilana adao se!',duration:'4:30'}
    ];
};

const selectedSongReducer = (selectedSongs=null,action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSongs;
};

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
});