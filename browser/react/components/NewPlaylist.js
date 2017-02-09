import React from 'react';

const NewPlaylist = function (props) {
return (
<div className="well">
  <form className="form-horizontal" onSubmit={props.handleSubmit}>
    <fieldset>
      <legend>New Playlist</legend>
      <div className="alert alert-warning" style={props.isValid || props.start ? {display: "none"} : {display:"block"} }>Please enter a name</div>
      <div className="form-group">
        <label className="col-xs-2 control-label">Name</label>
        <div className="col-xs-10">
          <input className="form-control" type="text" value={props.value} onChange={props.handleChange} name="playlistName"/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10 col-xs-offset-2">
          <button type="submit" disabled={props.isValid? false: true} className="btn btn-success">Create Playlist</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>
)}

export default NewPlaylist;
