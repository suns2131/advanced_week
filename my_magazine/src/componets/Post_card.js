import React from "react";
import { useHistory } from "react-router-dom";
import Post_comment from "./Post_commnet";
import Post_content from "./Post_content";
import Post_header from "./Post_header";

const Post_card = (props) => {
    const content_data = props.post_list;
    console.log(content_data)
    const history = useHistory();
    return (
        <div 
        onClick={() =>{
            history.replace({
                pathname:'/Detail',
                state : {post_state : content_data}
            })
        } }
        >
            <Post_header post_list = {content_data}/>
            <Post_content post_list = {content_data} />
            <Post_comment post_list = {content_data}/>
        </div>
    );
}

export default Post_card;