import React from "react";
import Post_comment from "./Post_commnet";
import Post_content from "./Post_content";
import Post_header from "./Post_header";

const Detail_content = (props) => {
    const content_data = props.post_state;
    console.log(content_data)
    return (
        <div>
            <Post_header post_list = {content_data}/>
            <Post_content post_list = {content_data} />
            <Post_comment post_list = {content_data}/>
        </div>
    );
}

export default Detail_content