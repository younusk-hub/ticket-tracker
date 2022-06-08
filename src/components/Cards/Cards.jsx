import React from 'react';
import Counter from '../Counter/Counter';
import "./Cards.scss";


const Cards = (props) => {
    const { team } = props;
    
    const displayTeam = team.map(member => {
        return (
        <div className="card-container">
            <div className='card-container__member-name'>{member.name}</div>
            <div className="card-container__member-role">{member.role}</div>
            <Counter team = {team} />
        </div> 
        )
    })

    return (
        <div className='container' >
            {displayTeam}
            
        </div>
    )
}

export default Cards