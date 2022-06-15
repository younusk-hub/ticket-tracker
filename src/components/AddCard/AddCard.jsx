import React, {useState} from 'react';
import "./AddCard.scss"

const AddCard = (props) => {
    const {handleSubmit} = props;

    const [showInput, setShowInput] = useState(true)
    
    const toggleShowArtistInfo = () => {
        showInput ? setShowInput(false) : setShowInput(true)
    }

    const landingJSX = (
        <div className='add-container'>
            <button className='add-container__add-button' onClick={toggleShowArtistInfo}>+</button>
        </div>
    )

    const popUpJSX = (
        <div className='add-container' onSubmit={handleSubmit}>
            <form data-testid='test1' className='add-container__content'  >
                <label htmlFor="name">Name: </label>
                <input id='name'  type="text" name="userName" />

                <label htmlFor="role">Role: </label>
                <input id='role' type="text" name="userRole" />

                <button className='add-container__submit' type="submit" >Submit</button>

            </form>
            <button onClick={toggleShowArtistInfo} className='add-container__cancel'>X</button>
        </div>
    )

    return (
        <div className='container' >
            {showInput ? landingJSX : popUpJSX }
        </div>
    )
}

export default AddCard