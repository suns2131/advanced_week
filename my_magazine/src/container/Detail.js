import React from "react";
import Header_menu from "../componets/Header_menu";
import Detail_content from "../componets/Detail_content";
import { useLocation } from "react-router-dom";

const Detail = () => {
    const locations = useLocation();
    const data = locations.state.post_state;
    console.log('data');
    console.log(data);
    return (
        <div>
            <Header_menu/>
            <Detail_content post_state = {data}/>
        </div>
    );
}

export default Detail