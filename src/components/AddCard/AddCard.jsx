import React, {useState} from 'react';
import Cards from '../Cards/Cards';
import "./AddCard.scss"

const AddCard = (props) => {
    const { team } = props;
    const [showInput, setShowInput] = useState(true)
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    
    const toggleShowArtistInfo = () => {
        showInput ? setShowInput(false) : setShowInput(true)
    }

    const landingJSX = (
        <div className='add-container'>
            <button className='add-container__add-button' onClick={toggleShowArtistInfo}>+</button>
        </div>
    )

    const handleSubmit = (event) => {
        event.preventDefault()
        team.push({
            name: {name},
            role: {role}
        })
        
    }

    const popUpJSX = (
        <div className='add-container'>
            <form className='add-container__content' onSubmit={handleSubmit} >
                <label htmlFor="name">Name: </label>
                <input id='name' value={name} type="text" onChange={(e) => setName(e.target.value)} />

                <label htmlFor="role">Role: </label>
                <input id='role' value={role} type="text" onChange={(e) => setRole(e.target.value)} />

                <input type="submit" />

            </form>
            <button onClick={toggleShowArtistInfo}>X</button>
        </div>
    )

    return (
        <div className='container' >
            {showInput ? landingJSX : popUpJSX }
        </div>
    )
}

export default AddCard