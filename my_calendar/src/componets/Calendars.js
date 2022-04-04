import React, { useState } from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'
import {Modal, Button} from 'react-bootstrap'
import styled from "styled-components";
import {useSelector} from 'react-redux'
import Changing_view from "./Changing_view";
import { useHistory } from "react-router-dom";
import Schedule_save from "./Schedule_save";

const Calendars = () => {
    const cur_month = useSelector((state) => state.ym_state.date);
    const history = useHistory();
    console.log(cur_month) 
    let event_list = [{title:'event1' , date : '2022-04-04 11:00'},{title:'event2' , date : '2022-04-04 10:00'},{title : 'event3', date :  '2022-04-05 10:00'}];
    const [isOpen,handleopen] = useState(false);
    const add_click= () => {
        window.alert('추가클릭!')
        handleShow();
    }
   
    const handleShow = () => {
        handleopen(true)
        console.log('추가')
        console.log('isopen : ' +'추가')
    };

    const chk_event_click = (e) => {
        console.log(e.event.title)
        console.log(e.event.start)
    }

    return (
        <Calendars_design>
        <Schedule_save isopen={isOpen} />
        <Changing_view name = '모든 일정 보기' />  
        <div className="calendar_con">
            <FullCalendar 
            initialView = "dayGridMonth" 
            customButtons={{
                addEvents : {
                    text : '추가',
                    click : add_click
                }
            }}
            headerToolbar ={{ left: 'prev',
                      center : 'title',
                      right : 'next addEvents'
                    }}
            
            plugins={[dayGridPlugin]} 
            locale='ko'
            height = '100vh'
            eventClick={chk_event_click}
            events={event_list}/>
        </div>
        
        </Calendars_design>
    );
}

const Calendars_design = styled.div`
    width: 100%;
    height: 91vh;
    max-height: 91vh;

    .calendar_con{
        padding: 10px 150px 0px 10px;
    }
`;
export default Calendars;