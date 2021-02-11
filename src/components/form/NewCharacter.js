import React from "react";
import axios from "axios";

import CharacterForm from "./CharacterForm";

class NewCharacter extends React.Component {
  // 1. Extrair os dados dos inputs e colocar no state
  state = {
    name: "",
    occupation: "",
    weapon: "",
    debt: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // bracket notation
  handleChangeCheckbox = (event) => {
    this.setState({ [event.target.name]: !this.state[event.target.name] });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://ih-crud-api.herokuapp.com/characters",
        this.state
      );

      console.log(response);

      this.props.history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <CharacterForm
        title="New Character"
        state={this.state}
        handleChange={this.handleChange}
        handleChangeCheckbox={this.handleChangeCheckbox}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default NewCharacter;
