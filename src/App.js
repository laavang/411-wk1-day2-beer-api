import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Beer (props) {

//   return (
//     <div>
//     <div>{props.beer.name}</div>
//     <img style={{height: '100px', width: 'auto'}} src={props.beer.image_url}/>
//     </div>
//   );
// }

class Beer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLiked: false
    };
  }

  likeClick = () => {
    this.setState({
      isLiked: !this.state.isLiked
    });
  };

  render() {

    return (
      <div style={{margin: '30px', textAlign: 'center', border: '1px solid black', padding: '30px', width: '200px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <img style={{height: '100px', width: '30px', marginBottom: '20px'}} src={this.props.beer.image_url}/>
        <div style={{marginBottom: '10px', fontWeight: '800'}}>{this.props.beer.name}</div>
        <div style={{marginBottom: '20px'}}>{this.props.beer.abv} ABV</div>
        <button style={{display: 'block'}} onClick={this.likeClick}>{this.state.isLiked ? 'Liked' : 'Like'}</button>
      </div>
    );
  }
  }



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }


componentDidMount() {
  fetch('https://api.punkapi.com/v2/beers')
    .then(json => json.json())
    .then(data => {
      this.setState({
        beers: data
      });
      console.log(data);
    })
}

render() {
  return (
    <div className="App" style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      {this.state.beers.map((beerData, index) => (
        <Beer key={index} beer={beerData} />
      ))}
    </div>
  );
}
}


export default App;
