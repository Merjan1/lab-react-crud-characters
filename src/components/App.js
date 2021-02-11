// Create, Read, Update, Delete
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";
import NewCharacter from "./form/NewCharacter";
import EditCharacter from "./form/EditCharacter";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import DeleteCharacter from "./DeleteCharacter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-5">
        {/* O Switch força que apenas o primeiro match de rota tenha seu componente renderizado, em situações em que ocorrem mais de um match */}
        <Switch>
          <Route path="/" exact component={CharacterList} />
          <Route path="/characters/new" component={NewCharacter} />
          <Route exact path="/characters/:id/edit" component={EditCharacter} />
          <Route
            exact
            path="/characters/:id/delete"
            component={DeleteCharacter}
          />
          <Route path="/characters/:id" component={CharacterDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
