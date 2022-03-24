import React from 'react';
import { useState } from 'react';

const TargetSetter = (props) => {

    if(!props.show) return null;
   
    const [target, setTarget] = useState(1);
    props.setNumber(target);

    function incrementValue(){
        setTarget(target + 1);
        props.setNumber(target + 1);
    }

    function decrementValue(){
        if (target > 1) {
            setTarget(target - 1);
            props.setNumber(target - 1);
        }
    }

    return (
        
            <div>
                <div className='wrapper-editHabit'></div>
                <button onClick={decrementValue}>-</button>
                {target}
                {/* <input type='text' className='edit-field' value='1' id='targetNum'></input> */}
                <button onClick={incrementValue}>+</button>
            </div>
            
    );
};

export default TargetSetter;