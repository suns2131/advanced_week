import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { getCookie, delCookie } from "../shared/Cookie";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/set_user";
import { APIKEY } from "../shared/firebase";

const Header_menu = () => {
    const session_key = `firebase:authUser:${APIKEY}:[DEFAULT]`;
    const is_sesstion = sessionStorage.getItem(session_key)? true : false;
    const dispatch = useDispatch();
    React.useEffect(() => {
        if(is_sesstion){
        dispatch(userActions.loginCheckFB())
        }
    },[])
    const history_menu = useHistory();
   
    const is_login = useSelector((state) => state.user.is_login)
    const is_login2 = useSelector((state) => state.user)

    console.log(session_key);
    console.log();

    const nicknm = '';
    // if(is_login) nicknm = is_login2.user.user_name;
    console.log('is_login2')
    console.log(is_login2)
    if(is_login2 != null)
        console.log()
    else 
        console.log(is_login2)
    const Home_move = () => {
        history_menu.push('/');    
    }

    const Signup_move = () => {
        history_menu.push('/Signup');
    }

    const Login_move = () => {
        console.log('메뉴 이동')
        history_menu.push('/Login');
    }

    const Alarm_move = () => {
        // history_menu.push('/Signup');
    }

    const Logout_move = () => {
        dispatch(userActions.logoutFB({}));
    }

    if(is_login)
    {
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
                        <h3>{is_login2.user.user_name}</h3>
                    </div>
                </div>
                <div className="btn_group">
                    <article onClick={Alarm_move}><Button variant="contained" sx={{fontSize : 20, width : 200, height : 50}} >알림</Button></article>
                    <article onClick={Logout_move}><Button variant="contained" sx={{fontSize : 20, width : 200, height : 50}} size = 'large' >로그아웃</Button></article>
                </div>
            </div>
            </Header_menu_design>
        );
    }
    else
    {
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