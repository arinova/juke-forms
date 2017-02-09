import React from 'react';
import Songs from './Songs.js'

export default class Playlist extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const playlistId = this.props.routeParams.playlistId;
    this.props.fetchPlaylist(playlistId);
    this.props.fetchAllSongs();
  }

  componentWillReceiveProps(nextProps){
    const nextPlaylistId = nextProps.routeParams.playlistId;
    //console.log("next", nextPlaylistId);
    const currentPlaylistId = this.props.routeParams.playlistId;
    //console.log("curr", currentPlaylistId);
    const fetchPlaylist = this.props.fetchPlaylist;
    if (nextPlaylistId !== currentPlaylistId)
      fetchPlaylist(nextPlaylistId);
  }

render() {
  const playlist = this.props.selectedPlaylist;
  console.log("songs array", this.props.songs);
  const songs = this.props.songs.map((song)=>{
    return(
      <option key={song.id} value={song.id}>{song.name}</option>
    );
  });


  return (
    <div>
      <h3>{ playlist.name }</h3>
      {playlist.songs? <Songs songs={playlist.songs}/> : null} {/** Hooray for reusability! */}
      { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
      <hr />
        <div className="well">
           <form className="form-horizontal" noValidate name="songSelect" onSubmit={this.props.handleAddtoPlaylist}>
             <fieldset>
               <legend>Add to Playlist</legend>
               <div className="form-group">
                 <label htmlFor="song" className="col-xs-2 control-label">Song</label>
                 <div className="col-xs-10">
                   <select className="form-control" name="song" name="songSelect">
                     {songs}
                   </select>
                 </div>
               </div>
               <div className="form-group">
                 <div className="col-xs-10 col-xs-offset-2">
                   <button type="submit" className="btn btn-success">Add Song</button>
                 </div>
               </div>
             </fieldset>
           </form>
         </div>
    </div>
  )
}

}
