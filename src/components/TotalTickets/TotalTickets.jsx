import React, {useEffect, useState } from 'react'

const TotalTickets = ({team}) => {
    const [totalCounter, setTotalCounter] = useState(0);
    console.log(team);

    const getTotalTickets = () => {
        let tempArr = []
        team.forEach(member => {
            console.log(member.counter);
            tempArr.push(member.counter)

            // return member.reduce((prev, next) => prev.counter + next.counter, 0)
        })
        console.log(tempArr);

        console.log(tempArr.reduce((a, b) => a + b));
        // return team.reduce((prev, next) => {
        //     console.log(prev, next)
        //     // console.log([...prev.counter, ...next.counter])
        //     // return [...prev.counter, ...next.counter]
        // })
    }

    useEffect(() => {
        getTotalTickets()
        console.log("hi",team);
    }, [team[0].counter])
    
    return (
        <div>{totalCounter}</div>
    )
}

export default TotalTickets