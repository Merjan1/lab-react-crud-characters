import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CharacterList extends React.Component {
  state = {
    characters: [],
  };

  // 1. Assim que o componente for renderizado, busque as informações na API
  componentDidMount = async () => {
    try {
      // Requisição do tipo GET para buscar os dados
      const response = await axios.get(
        "https://ih-crud-api.herokuapp.com/characters"
      );

      // Atualizando o state com o resultado da requisição
      this.setState({ characters: [...response.data] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Occupation</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.characters.map((character) => {
              return (
                <tr key={character.id}>
                  <td>{character.id}</td>
                  <td>{character.name}</td>
                  <td>{character.occupation}</td>
                  <td>
                    <Link to={`/characters/${character.id}`} className="mr-2">
                      <i className="fas fa-eye"></i>
                    </Link>
                    <Link
                      to={`/characters/${character.id}/edit`}
                      className="mr-2"
                    >
                      <i className="fas fa-edit"></i>
                    </Link>
                    <Link to={`/characters/${character.id}/delete`}>
                      <i className="fas fa-trash-alt"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CharacterList;
