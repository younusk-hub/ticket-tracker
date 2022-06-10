import React, {useState} from 'react';
import "./Counter.scss";
import arrow from "../../assets/images/arrow.png";

const Counter = ({member}) => {
    const [count, setCount] = useState(0);

   
    const handleIncrement = () => {
        setCount(count + 1)
        member.counter++
    }

     const handleDecrement = () => {
        if (count !== 0) {
            setCount(count - 1)
            member.counter--
        }
    }

    return (
        <div className='counter-container'>
            <img src={arrow} alt="" onClick={handleIncrement} className="counter-container__arrow-increment" />
            <h3>{count}</h3>
            <img src={arrow} alt="" onClick={handleDecrement} className="counter-container__arrow-decrement" />
        </div>
    )
}

export default Counter