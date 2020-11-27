import React from "react";
import PropTypes from 'prop-types';

const ShowCounterData = (props) => {
    const { counterValue } = props;

    const test = 100 - counterValue;

    return (
        <div>
            <p>Il tuo contatore vale: { counterValue}</p>
            { (test > 0) && (
                <p>Mancano {test} incrementi per arrivare a 100</p>
            )}
        </div>
    );
}

ShowCounterData.propTypes = {
    counterValue: PropTypes.number.isRequired
}

export default ShowCounterData;