import React from "react";
import axios from "axios";

class DeleteCharacter extends React.Component {
  async componentDidMount() {
    try {
      const response = await axios.delete(
        `https://ih-crud-api.herokuapp.com/characters/${this.props.match.params.id}`
      );

      console.log(response);

      this.props.history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return <p>Deleting...</p>;
  }
}

export default DeleteCharacter;
