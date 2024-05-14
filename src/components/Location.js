import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const {currency, dispatch } = useContext(AppContext);

    const [selectedCurrency, setSelectedCurrency] = useState("Select");

    const changeLocation = (val) => {
        dispatch({
            type: 'CHG_LOCATION',
            payload: val,
        })
    }

    const currencyLocation = (value) => {
        switch (value) {
            case '$' : 
                return '$ Dollar';
            case '£':
                return '£ Pound';
            case '€':
                return '€ Euro';
            case '₹':
                return '₹ Ruppee';
            default: 
                return '£ Pound';
        }
    }


    return (

        <div class=" dropdown ">
            <a class="alert btn btn-success dropdown-toggle" style={{ background: '#84E187', borderColor: '#84E187' }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Currency ({currencyLocation(currency)})
            </a>

            <ul class="dropdown-menu" style={{ background: '#84E187' }}>
                <li><a class="dropdown-item" href="#" onClick={() => setSelectedCurrency("$ Dollar")} >$ Dollar</a></li>
                <li><a class="dropdown-item" href="#" onClick={() => setSelectedCurrency("£ Pound")} >£ Pound</a></li>
                <li><a class="dropdown-item" href="#" onClick={() => setSelectedCurrency("€ Euro")} >€ Euro</a></li>
                <li><a class="dropdown-item" href="#" onClick={() => setSelectedCurrency("₹ Ruppee")} >₹ Ruppee</a></li>
            </ul>
        </div>
    );
};

export default Location;