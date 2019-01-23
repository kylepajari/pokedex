import React, { Component } from "react";
import "./App.css";
// import "./Components/pokedex-shell/pokedex-shell.css";
// import "./Components/PokedexContainer/PokedexContainer.css";
import PokedexShell from "./Components/pokedex-shell/pokedex-shell";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      allData: null,
      currentPokemon: 1
    };

    this.fetchPokemon = this.fetchPokemon.bind(this);
    this.Capitalize = this.Capitalize.bind(this);
  }

  fetchPokemon = num => {
    //tried to press prev when on first pokemon
    if (num === 0) {
      return false;
    }
    //else if tried to press next when on last pokemon
    //use 152, for last pokemon
    else if (num === 152) {
      return false;
    }

    let url = "https://pokeapi.co/api/v2/pokemon/" + num;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data }));
    this.setState({ currentPokemon: num });
  };

  //Returns passed string with upper-case first letter
  Capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then(response => response.json())
      .then(data => this.setState({ data }));

    fetch(
      "https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/?offset=0&limit=151"
    )
      .then(response => response.json())
      .then(allData => this.setState({ allData }));
  }

  render() {
    return (
      <div className="App">
        <PokedexShell
          data={this.state.data}
          allData={this.state.allData}
          currentPokemon={this.state.currentPokemon}
          fetchPokemon={this.fetchPokemon}
          Capitalize={this.Capitalize}
        />
      </div>
    );
  }
}

export default App;
