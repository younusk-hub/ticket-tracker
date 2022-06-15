import React, { useState } from "react";
import "./AddCard.scss";

const AddCard = props => {
  const { handleSubmit } = props;

  const [showInput, setShowInput] = useState(true);
  const [ticketData, setTicketData] = useState({ userRole: "", userName: "" });

  const handleInput = event => {
    console.log(event.target.name);
    setTicketData({ ...ticketData, [event.target.name]: event.target.value });
  };

  const toggleShowArtistInfo = () => {
    showInput ? setShowInput(false) : setShowInput(true);
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    handleSubmit(ticketData);
  };

  const landingJSX = (
    <div className="add-container">
      <button className="add-container__add-button" onClick={toggleShowArtistInfo}>
        +
      </button>
    </div>
  );

  const popUpJSX = (
    <div className="add-container" onSubmit={handleSubmitForm}>
      <form data-testid="test1" className="add-container__content">
        <label htmlFor="name">Name: </label>
        <input id="name" type="text" name="userName" value={ticketData.userName} onInput={handleInput} />

        <label htmlFor="role">Role: </label>
        <input id="role" type="text" name="userRole" value={ticketData.userRole} onInput={handleInput} />

        <button className="add-container__submit" type="submit">
          Submit
        </button>
      </form>
      <button onClick={toggleShowArtistInfo} className="add-container__cancel">
        X
      </button>
    </div>
  );

  return <div className="container">{showInput ? landingJSX : popUpJSX}</div>;
};

export default AddCard;
