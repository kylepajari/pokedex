import React, { Component } from "react";
import pokeball from "../../pokeball.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pokedex-shell/pokedex-shell.css";
import PokedexContainer from "../PokedexContainer/PokedexContainer";

class pokedexshell extends Component {
  render() {
    if (this.props.data === null) {
      return (
        <div className="PokeDex">
          <div className="title">
            <p>myPokédex</p>
            <img className="pokeball" src={pokeball} alt="Pokeball" />
          </div>
          <h3>Loading Data...</h3>
        </div>
      );
    }
    return (
      <div className="PokeDex">
        <div className="title">
          <p>myPokédex</p>
          <img className="pokeball" src={pokeball} alt="Pokeball" />
        </div>
        <PokedexContainer
          data={this.props.data}
          allData={this.props.allData}
          currentPokemon={this.props.currentPokemon}
          fetchPokemon={this.props.fetchPokemon}
          Capitalize={this.props.Capitalize}
        />
      </div>
    );
  }
}

export default pokedexshell;
