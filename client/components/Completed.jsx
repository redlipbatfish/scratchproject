import React from 'react';
import { connect } from 'react-redux';

const Completed = () => {
    return (
        <div className='wrapper-todo'>
            <div className='item-done'>
                <div className='habit-name'>
                    Stretch
                </div>
                <div className='progress-container'>
                    <div className='wrapper-progressbar'>
                        <div className='progressbar' style={{width: "100%"}}></div>
                    </div>
                    <div className='wrapper-btns'>
                        <div className='btn-big-minus'>-</div>
                    </div>
                </div>
            </div>
            <div className='item-done'>
                <div className='habit-name'>
                    Make bed
                </div>
                <div className='progress-container'>
                    <div className='wrapper-progressbar'>
                        <div className='progressbar' style={{width: "100%"}}></div>
                    </div>
                    <div className='wrapper-btns'>
                        <div className='btn-big-minus'>-</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Completed;