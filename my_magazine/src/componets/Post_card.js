import React from "react";
import Post_comment from "./Post_commnet";
import Post_content from "./Post_content";
import Post_header from "./Post_header";

const Post_card = (props) => {
    const content_data = props.post_direction;
    console.log(content_data)
    return (
        <div>
            <Post_header />
            <Post_content post_direction = {content_data} />
            <Post_comment/>
        </div>
    );
}

export default Post_card;