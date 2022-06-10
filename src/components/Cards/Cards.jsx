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
            {console.log(member)}
            <Counter member = {member} />
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