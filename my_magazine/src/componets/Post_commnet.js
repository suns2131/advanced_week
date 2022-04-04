import React, { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import styled from "styled-components";
import { pink } from "@mui/material/colors";

const Post_comment = () => {
    const [heart_state,setheart] = useState(false);
    const heart_cnt = 10;

    const heart_click = () => {
        if(heart_state)
            setheart(false);
        else 
            setheart(true);
    }

    return (
        <Post_comment_design>
        <div className="favorite_area">
            <div className="favorite_cnt">
                <h5>좋아요 {heart_cnt}개</h5>
            </div>
            <div className="favorite_icon">
            <Stack direction="row" spacing={1}>
                {heart_state === true ? 
                    <IconButton aria-label="Favorite" onClick={heart_click} >
                        <FavoriteIcon sx={{ fontSize: 50, color : pink[400] }}/>
                    </IconButton>
                    : 
                    <IconButton aria-label="FavoriteBorder" onClick={heart_click}>
                        <FavoriteBorderIcon sx={{ fontSize: 50, color : pink[400] }}/>
                    </IconButton>
                }
            </Stack>
            </div>
        </div>
        </Post_comment_design>
    );
}

const Post_comment_design = styled.div`
    .favorite_area{
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .favorite_cnt{
        margin-left: 20px;
    }
    .favorite_icon{
        margin-right: 20px;
    }
`;

export default Post_comment;