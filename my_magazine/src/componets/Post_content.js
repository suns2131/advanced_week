import React from "react";
import styled from "styled-components";

const Post_content = (props) => {
    const Post_state = props.post_direction;

    if(Post_state === 'left')
    {
        return (
            <Post_contnet_design>
            <div className="content_box"> 
            <div className="left_box">
                <img className="img_area" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
            </div>
            <div className="right_box">
                <p className="text_area">text Box</p>
            </div>
            </div>
            </Post_contnet_design>
        );
    }
    else if(Post_state ==='right')
    {   
        return (
            <Post_contnet_design>
            <div className="content_box"> 
            <div className="left_box">
                <p className="text_area">text Box</p>
            </div>
            <div className="right_box">
                <img className="img_area" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
            </div>
            </div>
            </Post_contnet_design>
        );
    }
    else if(Post_state === 'center')
    {
        return(
            <Post_contnet_design>
            <div className="content_box2"> 
            <div className="top_box">
                <p className="text_area">text Box</p>
            </div>
            <div className="bottom_box">
                <img className="img_area" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
            </div>
            </div>
            </Post_contnet_design>     
        );
    }
}

const Post_contnet_design = styled.div`
    .content_box{
        width: 100%;
        height : 450px;
        display: flex;
    }
    .content_box2{
        width: 100%;
        height : 450px;
    }
    .left_box{
        width: 50%;
    }
    .text_area {
        margin-left: 20px;
    }
    .img_area{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .right_box{
        width: 50%;
    }
    .top_box{
        height: 50px;
    }
    .bottom_box{
        height: 400px;
    }
`;

export default Post_content;