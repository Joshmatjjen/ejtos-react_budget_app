import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    }

    return (
        <div className='alert alert-secondary d-flex flex-row flex-nowrap'>
            <span>Budget: {currency}<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input></span>

        </div>
    );
};
export default Budget;