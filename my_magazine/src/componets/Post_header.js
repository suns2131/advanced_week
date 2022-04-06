import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Post_header = (props) => { 
    const Post_state = props.post_list;
    const history = useHistory();
    return (
        <Post_header_design>
        <div className="card_header_container" >
            <div className="user_group"><h5>{Post_state.user_name}</h5></div>
            <div className="time_group"><h6>{Post_state.insert_dt}</h6></div>
        </div>
        </Post_header_design>
    );
}

const Post_header_design = styled.div`
    .card_header_container{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100px;
    }
    .user_group{
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
    }
    h5{
        margin-left : 30px;
    }
    .time_group {
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
`;

export default Post_header;