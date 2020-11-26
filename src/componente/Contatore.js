import React from "react";
import PropTypes from 'prop-types';
import {useState} from "react";
import ShowCounterData from "./ShowCounterData";

function Contatore (props){
    const { valueStart } = props;
    const [ counter, setCounter] = useState(valueStart);
    const increment = () => {
        setCounter(counter + 1);
    }

    const decrease = () => {
        setCounter(counter - 1);
    }

    return (
        <div className={'contenitore'}>
            <ShowCounterData counterValue={counter}/>
            <button className={'più'} onClick={ increment }>+</button>
            <button className={'meno'} disabled={ (counter <= 0) && 'disabled'} onClick={ decrease }>-</button>
        </div>
    );
}

Contatore.propTypes = {
    valueStart: PropTypes.number.isRequired
}

Contatore.defaultProps = {
    valueStart: 0
}

export default Contatore;