import React from 'react';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

export default class FilterableArtistsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state={value: ""};
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({value: e.target.value});
  }

  render(){
    console.log("length", this.props.artists.length);
    const filteredArtists= this.props.artists.length > 0 ? this.props.artists.filter((artist)=>{
      // artist= artist+"";
      return artist.name.match(this.state.value);
    }): null;
    console.log("filteredArtists",filteredArtists);
    return (
      <div>
        <FilterInput handleChange={this.handleChange}/>

        {filteredArtists? <Artists artists={filteredArtists}/> : null}
      </div>
    );
  }

}
