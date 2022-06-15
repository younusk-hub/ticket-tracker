import React from 'react';
import Counter from '../Counter/Counter';
import "./Cards.scss";


const Cards = (props) => {
    const { team, handleIncrementTicket, handleDecrementTicket } = props;
    
    const displayTeam = team.map((member, index) => {
        return (
        <div className="card-container" key={index} data-testid="display-card">
            <div className='card-container__member-name'>{member.name}</div>
            <div className="card-container__member-role">{member.role}</div>
            {console.log(member)}
            <Counter member = {member} handleIncrementTicket = {handleIncrementTicket} handleDecrementTicket = {handleDecrementTicket} />
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