import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';
import {hashHistory} from 'react-router'

export default class NewPlaylistContainer extends React.Component {
  constructor(props){
    super(props);
    this.state={value: "", isValid: false, start: true};
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }



  handleChange(e){
    //console.log("cahnge value", e.target.value);
    this.setState({value: e.target.value});
    this.setState({start: false});
    if(e.target.value.length > 16 || e.target.value.length === 0){
      this.setState({isValid:false});
    } else{
      this.setState({isValid:true});
    }
  }

  handleSubmit(e){
    e.preventDefault();
    //console.log("submit value", e.target.playlistName.value);

    this.props.createPlaylist(e.target.playlistName.value);
    this.setState({value: ""});

  }

  render(){

    return(
      <NewPlaylist start={this.state.start} isValid={this.state.isValid} handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value}/>

    );
  }
}
