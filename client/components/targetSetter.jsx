import React from 'react';


const TargetSetter = (props) => {

    if(!props.show) return null;

    function incrementValue(){
        document.getElementById('targetNum').value++;


    }

    function decrementValue(){
        
        const num = document.getElementById('targetNum').value
        if(num > 0){
          document.getElementById('targetNum').value--;  
        } 
        
    }

    return (
        
            <div>
                <div className='wrapper-editHabit'></div>
                <button onClick={decrementValue}>-</button>
                
                <input type='text' className='edit-field' value='1' id='targetNum'></input>
                <button onClick={incrementValue}>+</button>
            </div>
            
    );
};

export default TargetSetter;