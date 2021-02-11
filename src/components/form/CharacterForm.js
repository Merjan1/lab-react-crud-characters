import React from "react";

function CharacterForm(props) {
  return (
    <form>
      <h1>{props.title}</h1>
      <div className="form-group">
        <label htmlFor="characterFormName">Name</label>
        <input
          type="text"
          className="form-control"
          id="characterFormName"
          name="name"
          onChange={props.handleChange}
          value={props.state.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="characterFormOccupation">Occupation</label>
        <input
          type="text"
          className="form-control"
          id="characterFormOccupation"
          name="occupation"
          onChange={props.handleChange}
          value={props.state.occupation}
        />
      </div>
      <div className="form-group">
        <label htmlFor="characterFormWeapon">Weapon</label>
        <input
          type="text"
          className="form-control"
          id="characterFormWeapon"
          name="weapon"
          onChange={props.handleChange}
          value={props.state.weapon}
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="characterFormDebt"
          name="debt"
          checked={props.state.debt}
          onChange={props.handleChangeCheckbox}
        />
        <label className="form-check-label" htmlFor="characterFormDebt">
          Is in Debt?
        </label>
      </div>
      <button
        onClick={props.handleSubmit}
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
}

export default CharacterForm;
