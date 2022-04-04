import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Header_menu = () => {
    const history_menu = useHistory();

    const Home_move = () => {
        history_menu.push('/');    
    }

    const Signup_move = () => {
        history_menu.push('/Signup');
    }

    const Login_move = () => {
        history_menu.push('/Login');
    }

    return (
        <Header_menu_design>
        <div className="header_container">
            <div className="left_group">
                <div className="icon_group" onClick={Home_move}>
                    <Stack direction="row" spacing={1}>
                        <IconButton aria-label="HomeRounded">
                        <HomeRoundedIcon sx={{ fontSize: 50 }}  color="primary" />
                        </IconButton>
                    </Stack>
                </div>
                <div className="user_group">
                    <h3>로그인 하지 않았습니다.</h3>
                </div>
            </div>
            <div className="btn_group">
                <article onClick={Signup_move}><Button variant="contained" sx={{fontSize : 20, width : 200, height : 50}} >회원가입</Button></article>
                <article onClick={Login_move}><Button variant="contained" sx={{fontSize : 20, width : 200, height : 50}} size = 'large' >로그인</Button></article>
            </div>
        </div>
        </Header_menu_design>
    );
}

const Header_menu_design = styled.div`
    .header_container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
    }
    .left_group{
        display: flex;
    }
    .icon_group{
        margin-left: 20px;
    }
    .user_group{
        margin-left: 20px;
        max-width: 203px;
    }
    h3{
        max-width: 203px;
    }
    .btn_group{
        display: flex;
    }
    .btn_group > article {
      margin  : 10px 20px;
    }
`

export default Header_menu;