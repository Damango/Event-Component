import React, {useState, useEffect} from 'react';
import "./EventComponent.css"
import DateBlock from "./SubComponents/DateBlock"
const EventComponent = () => {

    
    const [characterCount, setCharacterCount] = useState(80);
    const [typeChanger, setTypeChanger] = useState('event');
    const [selectedDate, setSelectedDate] = useState();
    const [calenderStatus, setCalenderStatus] = useState('off')


    useEffect(() => {

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        
        today = mm + '/' + dd + '/' + yyyy;

        setSelectedDate(today)


    }, [])





    function updateCharacterCount(){

        if(characterCount <= 0){
            //alert("TOO MANY CHARACTERS")
        }

        else{
            let theInput = document.querySelector('.event-title-input');
            let theLength = theInput.value.length;
            setCharacterCount(80 - theLength)
        }
       
    }

    function renderSelectorStyle(){
        if(typeChanger === 'reminder'){

            return('selector-style-reminder')

        }

        else{
            return('selector-style-event')
        }
    }

    function renderCalender(){

        let currentMonth = '05'
       // let currentDate = selectedDate[0]
        if(currentMonth === '05'){
            currentMonth = 'May'
        }

        let i;
        
        let theDates = []
        for(i = 0; i < 35; i++){

            theDates.push(i)


        }



        if(calenderStatus === 'on'){
            return(<div className="calender-container">
                <div className="calender-month">{currentMonth} 2020</div>
                <div className="change-months-container"></div>
                <div className="dates-container">

                {theDates.map((date) => <DateBlock date={date} selectedDate={selectedDate} setDate={setSelectedDate} closeCalender={setCalenderStatus}/>)}

                </div>




            </div>)
        }



    }


    return ( <div className="event-component-container">

            <div className="component-header">Create Event</div>
            <div className="inputs-container">

            <input placeholder="Title" className="event-title-input" onInput={updateCharacterCount}/>
            <span className="input-character-count">{characterCount}</span>
            </div>
           
            <div className="event-type-changer-container">
                <div className={ renderSelectorStyle() +" center-y"}></div>
                <div className="event-button center-y" onClick={() => {setTypeChanger('event')}}>Event</div>
                <div className="reminder-button center-y" onClick={() => {setTypeChanger('reminder')}}>Reminder</div>

            </div>
            <div className="color-picker-container">
                <span className="color-header">Color:</span>
                <div className="colors-wrapper center-y">
                    <div className="color-selector red"></div>
                    <div className="color-selector orange"></div>
                    <div className="color-selector yellow"></div>
                    <div className="color-selector green"></div>
                    <div className="color-selector blue"></div>
                    <div className="color-selector purple"></div>
                </div>

            </div>
            <div className="date-picker-container">
                <div className="date-header">Date</div>
                <div className="date-picker" onClick={() => {setCalenderStatus('on')}}>{selectedDate}{renderCalender()}</div>
             
                </div>
            <div className="component-footer">
                <div className="button-container center-all">
                <button className="create-button">Create</button>
                

                </div>
            </div>

    </div> );
}
 
export default EventComponent;