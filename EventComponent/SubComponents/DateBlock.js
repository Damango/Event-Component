import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring'

const DateBlock = (props) => {


    const blockAnimation = useSpring({from:{top: -20}, to:{top: 0}, config:{duration: props.index * 20}})

    function dateBlockStyle(){

        let selectedDate = parseInt(props.selectedDate[3] + props.selectedDate[4])
        if(props.date === selectedDate){

            return('date-block-selected')

        }
        else{
            return('date-block')
        }
    }

    function changeDate(){


    
        let mm = props.selectedDate[0] + props.selectedDate[1]
        let dd = props.date;
        
        let i;

        let yearArray = []
 
        for(i = props.selectedDate.length - 1; i > 4; i--){

            if(props.selectedDate[i] != '/'){
                yearArray.push(props.selectedDate[i])

            }
        }


        let yyyy = yearArray[3] + yearArray[2] + yearArray[1] + yearArray[0];

        let newDate = mm + '/' + dd + '/' + yyyy;

       props.setDate(newDate)
       setTimeout(() => { props.closeCalender('off')}, 1000)
      
    }


    return ( <animated.div style={blockAnimation} className={dateBlockStyle()} onClick={changeDate} ><div className="date-block-number center-y">{props.date}</div></animated.div> );
}
 
export default DateBlock;