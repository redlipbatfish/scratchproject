import React from 'react';
import { connect } from 'react-redux';

const ToDo = () => {
    return (
        <div className='wrapper-todo'>
            <div className='item-todo'>
                <div className='habit-name'>
                    Drink water
                </div>
                <div className='progress-container'>
                    <div className='wrapper-progressbar'>
                        <div className='progressbar' style={{width: "60%"}}></div>
                    </div>
                    <div className='wrapper-btns'>
                        <div className='btn-progress minus'>-</div>
                        <div className='btn-progress plus'>+</div>
                    </div>
                </div>
            </div>
            <div className='item-todo'>
                <div className='habit-name'>
                    Walk dog
                </div>
                <div className='progress-container'>
                    <div className='wrapper-progressbar'>
                        <div className='progressbar' style={{width: "20%"}}></div>
                    </div>
                    <div className='wrapper-btns'>
                        <div className='btn-progress minus'>-</div>
                        <div className='btn-progress plus'>+</div>
                    </div>
                </div>
            </div>
            <div className='item-todo'>
                <div className='habit-name'>
                    Sleep on time
                </div>
                <div className='progress-container'>
                    <div className='wrapper-progressbar'>
                        <div className='progressbar' style={{width: "0%"}}></div>
                    </div>
                    <div className='wrapper-btns'>
                        <div className='btn-check'>	&#10003;</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDo;