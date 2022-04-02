import React from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import styled from "styled-components";
import {useSelector} from 'react-redux'

const Calendars = () => {
    const cur_month = useSelector((state) => state.ym_state.date);
    console.log(cur_month) 
    const start_date = new Date(cur_month.split('-')[0], cur_month.split('-')[1],1);
    const last_date = new Date(cur_month.split('-')[0], cur_month.split('-')[1],0);
    let days = [[27,28,29,30,31,1,2],[3,4,5,6,7,8,9],[10,11,12,13,14,15,16],[17,18,19,20,21,22,23],[24,25,26,27,28,29,30],[]];

    console.log(last_date)
    console.log(last_date.getFullYear())
    console.log(last_date.getMonth()+1)
    console.log(last_date.getDate())
    console.log(last_date.getDay())

    

    // console.log(start_date, last_date.getFullYear() + '-' + (last_date.getMonth()+1))

    return (
        <Calendars_design>
        <div>
            <div className="container">
                <div className="sun">일</div>
                <div className="mon">월</div>
                <div className="tue">화</div>
                <div className="wen">수</div>
                <div className="thr">목</div>
                <div className="fir">금</div>
                <div className="set">토</div>
            </div>
            <div className="body_container_top">
                {days.map((el,idx) => {
                    return (
                        <div className="body_container" key={el}>
                            {el.map((el2,idx2) => {
                                return (
                                    <div>
                                        {el2}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
        </Calendars_design>
        
    );
}

const Calendars_design = styled.div`
    width: 100%;
    height: 91vh;
    max-height: 91vh;
    background-color: red;
    .container{
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        background-color: aliceblue;
    }
    .container > div{
        line-height: 3vh;
        text-align: center;
    }
    .sun{
        background-color: blue;
    }
    .mon{
        background-color: blueviolet;
    }
    .tue{
        background-color: darkblue;
    }
    .wen{
        background-color: darkcyan;
    }
    .thr{
        background-color: darkgoldenrod;
    }
    .fir{
        background-color: darkkhaki;
    }
    .set{
        background-color: darkorange;
    }
    .body_container_top{
        height: 88vh;
        background-color: darkseagreen;
        grid-template-rows : repeat(6,1fr);
    }

    .body_container{
        background-color: bisque;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
    }
    .body_container > div {
        height: 163.7px;
        border: 1px solid black;
        padding-top:  5px;
        padding-left: 5px;
    }
`;
export default Calendars;