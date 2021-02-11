import React from "react";
import axios from "axios";

class CharacterDetail extends React.Component {
  state = {
    id: "",
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

  render() {
    return (
      <div className="d-flex flex-column">
        <h1>Character Details</h1>
        <span>
          <strong>ID: </strong>
          {this.state.id}
        </span>
        <span>
          <strong>Name: </strong>
          {this.state.name}
        </span>
        <span>
          <strong>Occupation: </strong>
          {this.state.occupation}
        </span>
        <span>
          <strong>Weapon: </strong>
          {this.state.weapon}
        </span>

        <span>
          <strong>Is in debt? </strong>
          {this.state.debt ? "Yes" : "No"}
        </span>
      </div>
    );
  }
}

export default CharacterDetail;
