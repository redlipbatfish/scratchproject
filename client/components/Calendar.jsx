import React from 'react';
import { connect } from 'react-redux';

const Calendar = () => {
    const hundred = <div className='square green'></div>
    const sixtySixTo99 = <div className='square yellow-green'></div>
    const thirtyThreeTo65 =  <div className='square beige'></div>

    const currentMonth = [];

    // for () {
    //     if (date['fulfilled_percent'] === 100) currentMonth.push(hundred);
    //     if (date['fulfilled_percent'] >= 66 || date['fulfilled_percent'] <= 99) currentMonth.push(sixtySixTo99);
    //     if (date['fulfilled_percent'] )
    // }

    return (
        <div className='calendar'>
            <div className='squares-wrapper'>
             
                <div id='label-month'>April '22</div>
            </div>
        </div>
    );
};

export default Calendar;

// return (
//     <div className='calendar'>
//         <div className='squares-wrapper'>
//             <div className='square green'></div>
//             <div className='square yellow-green'></div>
//             <div className='square green'></div>
//             <div className='square beige'></div>
//             <div className='square yellow-green'></div>
//             <div className='square green'></div>
//             <div className='square green'></div>
//             <div className='square green'></div>
//             <div className='square green'></div>
//             <div className='square green'></div>
//             <div className='square yellow-green'></div>
//             <div className='square yellow-green'></div>
//             <div className='square green'></div>
//             <div className='square green'></div>
//             <div className='square green'></div>
//             <div className='square beige'></div>
//             <div className='square beige'></div>
//             <div className='square green'></div>
//             <div className='square green'></div>
//             <div className='square yellow-green'></div>
//             <div className='square green'></div>
//             <div className='square yellow-green'></div>
//             <div className='square green'></div>
//             <div className='square green'></div>
//             <div className='square green'></div>
//             <div className='square yellow-green'></div>
//             <div className='square green'></div>
//             <div className='square yellow-green'></div>
//             <div className='square green'></div>
//             <div className='square beige'></div>
//             <div className='square green'></div>
//             <div id='label-month'>April '22</div>
//         </div>
//     </div>
// );