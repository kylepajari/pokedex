import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../PokedexContainer/PokedexContainer.css";

class PokedexContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  changeDropDown = num => {
    console.log("running fetch...");

    this.props.fetchPokemon(num);
  };

  toggleOpen = () => {
    console.log("toggling dropdown...");
    console.log(this.state.isOpen);
    const currentIsOpen = this.state.isOpen;
    this.setState({ isOpen: !currentIsOpen });
  };

  render() {
    return (
      <div className="pokedex-container">
        <div className="pokemon-pokedex">
          <div className="id">#{this.props.currentPokemon}</div>
          <div
            className="pokemon-sprite"
            style={{
              backgroundImage:
                "url(" + this.props.data.sprites.front_default + ")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "55%"
            }}
          >
            {/* <img
              className="sprite"
              src={this.props.data.sprites.front_default}
              alt={this.props.data.name}
            /> */}
          </div>
          <div className="pokemon-name">
            <p className="name">
              {this.props.Capitalize(this.props.data.name)}
            </p>
          </div>
          <div className="pokemon-abilities">
            <strong>ABILITIES:</strong>
            {this.props.data.abilities.map((item, i) => {
              return (
                <p className="ability" key={i}>
                  {this.props.Capitalize(item.ability.name)}
                </p>
              );
            })}
          </div>
          <div className="pokemon-stats">
            <div className="height">
              <strong>HEIGHT: </strong>
              <br />
              {Math.round((this.props.data.height / 10) * 3.281)} ft
            </div>
            <div className="weight">
              <strong>WEIGHT: </strong>
              <br />
              {Math.round((this.props.data.weight / 10) * 2.205)} lbs
            </div>
          </div>
        </div>
        <div className="navbuttons">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => this.props.fetchPokemon(1)}
          >
            &lt;&lt;
          </button>{" "}
          <button
            type="button"
            className="btn btn-dark"
            onClick={() =>
              this.props.fetchPokemon(this.props.currentPokemon - 1)
            }
          >
            &lt;
          </button>{" "}
          <button
            type="button"
            className="btn btn-dark"
            onClick={() =>
              this.props.fetchPokemon(this.props.currentPokemon + 1)
            }
          >
            &gt;
          </button>{" "}
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => this.props.fetchPokemon(151)}
          >
            &gt;&gt;
          </button>
        </div>
        <div className="btn-group dropdown" onClick={this.toggleOpen}>
          <button
            type="button"
            className="btn btn-dark dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            id="dropdownMenu1"
          >
            Select
          </button>
          <div
            className={`"dropdown-menu" ${
              this.state.isOpen ? "dropdown-menu show" : "dropdown-menu"
            }`}
            // className="dropdown-menu"
            aria-labelledby="dropdownMenu1"
          >
            {this.props.allData.results.map((item, i) => {
              return (
                <a
                  className="dropdown-item"
                  key={i}
                  href="#!"
                  onClick={() => this.changeDropDown(i + 1)}
                >
                  {this.props.Capitalize(item.name)}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default PokedexContainer;
