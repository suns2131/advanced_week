import React from 'react'
import styled from 'styled-components'
import MoveMonth from './MoveMonth'
import {useSelector} from 'react-redux'

const Headers = () => {
    const state_date = useSelector((state) => state.ym_state.date)
    const Year = state_date.split('-')[0];
    const Mon = state_date.split('-')[1];
    return (
        <Header_Style>
        <div>
            <div className='con'>
                <MoveMonth btn_nm = 'Prev' cur_date = {state_date}/>
                <h1>{Year + '년' + Mon + '월'}</h1>
                <MoveMonth btn_nm = 'Next' cur_date = {state_date}/>
            </div>
        </div>
        </Header_Style>
    );

}

const Header_Style = styled.div`
    background-color: blue;
    .con{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: green;
    }

    h1{
    }
    
`;

export default Headers;