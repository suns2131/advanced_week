import React from "react";
import styled from "styled-components";
import Header_menu from "../componets/Header_menu";
import Post_card from "../componets/Post_card";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { fontSize } from "@mui/system";
import { useHistory } from "react-router-dom";

const Home = () => {
    const data_state = ['left','right','center','center','center'];
    const history_menu = useHistory();

    const floating_action = () => {
        history_menu.push('/Post')
    }

    return (
        <Home_design>
        <div>
            <Header_menu />
            {data_state.map((el,idx) => {
                return (
                    <Post_card post_direction = {el}/>
                );
            })
            }
            <div className="floating_btn_area" onClick={floating_action}>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab color="primary" aria-label="edit" size="large">
                        <EditIcon />
                    </Fab>
                </Box>
            </div>
        </div>
        </Home_design>
    );
}

const Home_design = styled.div`
    .floating_btn_area{
        position : fixed;
        right : 5%;
        bottom : 5%; 
    }
`;

export default Home;