import React from 'react';
import { connect } from 'react-redux';

const Calendar = (props) => {
    // console.log('here', props);

    const hundred = <div className='square green'></div>
    const sixtySixTo99 = <div className='square yellow-green'></div>
    const thirtyThreeTo65 =  <div className='square beige'></div>

    let monthData = props.calendarData;
    const currentMonth = [];
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    // for (let avg in res.calendar) {
    for (let avg of monthData) {
        avg = Math.floor(avg * 100);
        if (avg === 100) {currentMonth.push(hundred);}
        if (avg >= 66 && avg <= 99) currentMonth.push(sixtySixTo99);
        if (avg <= 65) currentMonth.push(thirtyThreeTo65);
    }
    console.log('current month ' + currentMonth);
    const currentDate = new Date();
    const month = monthNames[currentDate.getMonth()];
    let year = '' + currentDate.getFullYear();
    year = "'" + year.slice(2);

    const displayDate = month + ' ' + year;

    return (
        <div className='calendar'>
            <div className='squares-wrapper'>
             {currentMonth}
                <div id='label-month'>{displayDate}</div>
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


    // Fetch calendar's {calendar: [28]} 
    
    // const getCalendarArr = async () => {
    //     try {
    //         const response = await fetch('http://localhost:3000/feed');
    //         const  data = await response.json();
    //         currentMonth = data.calendar;
    //     } catch(error) {
    //         console.error(error.message)
    //     }
    // }
    


    // const sampleArr = [
    //     100,
    //     100,
    //     100,
    //     100,
    //     100,
    //     100,
    //     90,
    //     100,
    //     100,
    //     100,
    //     100,
    //     10,
    //     100,
    //     100,
    //     100,
    //     70,
    //     100,
    //     100,
    //     100,
    //     50,
    //     30,
    //     100,
    // ]