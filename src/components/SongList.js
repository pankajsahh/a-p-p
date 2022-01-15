import React from "react";
import { connect } from "react-redux";
import { selectSong } from '../actions'


function SongList (state) {
    return (
      <div>
        <ul>
          {state.songs.map((song) => {
              return(
                
                  <li className="items" onClick={()=>state.selectSong(song.title)} key={song.title}>{song.title}
                  <button>{song.title}</button>
                  </li>
              );
        
            })
          }
        </ul>
      </div>
    )
  };

// this mapstatetoprops is the function give state from 
// reducers to component via state of function
// as a props in class components 
const mapStateToProps = (state) => {
  // console.log(state)
  return {songs:state.songs};
};

export default connect(mapStateToProps , { selectSong:selectSong })(SongList);
