import React from "react";
import axios from "axios";
import CharacterForm from "./CharacterForm";

class EditCharacter extends React.Component {
  state = {
    name: "",
    occupation: "",
    weapon: "",
    debt: false,
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://ih-crud-api.herokuapp.com/characters/${this.props.match.params.id}`
      );

      this.setState({ ...response.data });
    } catch (err) {
      console.log(err);
    }
  }

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
      const response = await axios.put(
        `https://ih-crud-api.herokuapp.com/characters/${this.props.match.params.id}`,
        this.state
      );

      this.props.history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <CharacterForm
        title="Edit Character"
        state={this.state}
        handleChange={this.handleChange}
        handleChangeCheckbox={this.handleChangeCheckbox}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default EditCharacter;
