import React, { useEffect, useRef ,useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Changing_view = ({name}) => {
    const [nm,set_nm] = useState(name);
    const usebtn = useRef(null);
    const view_click = () => {
        window.alert('view_click!');
        if(nm === '모든 일정 보기')
            set_nm('완료된 일정 보기')
        else 
            set_nm('모든 일정 보기')

        console.log(nm)
    }

    React.useEffect(() => {
        console.log('rendering!')
    },[nm]);

    return (
        <Floating_design>
        <div className="floating">
           <button ref = {usebtn} onClick={view_click}>{nm}</button>
        </div>
        </Floating_design>
    );
}

const Floating_design = styled.div`
    .floating{
        position : fixed;
        right : 1%;
        bottom : 5%; 
    }
    button{
        width: 120px;
        height: 30px;
    }
`;

export default Changing_view;