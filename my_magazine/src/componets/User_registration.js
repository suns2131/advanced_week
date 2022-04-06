import React, { useRef, useState } from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Visibility from '@mui/icons-material/Visibility';
import {useDispatch}from 'react-redux'
 import {actionCreators as userActions} from '../redux/modules/set_user'

const User_Registration = () => {
    const dispatch = useDispatch();
    const [id,setId] = useState('');
    const [pwd,setPwd] = useState('');
    const [pwd_confirm,setPwdconfirm] = useState('');
    const [nicknm, setNicknm] = useState('');

    const Signup_click = () => {
        console.log('id : ' + id)
        console.log('nicknm : ' + nicknm)
        console.log('pwd : ' + pwd)
        console.log('pwd_confirm : ' + pwd_confirm)
        const id_regex = /^[0-9z-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        if(!id_regex.test(id) )
        {
            window.alert('ID 형식이 이메일형식이 아니에요 ') ;
            return ;
        }    
        else if(nicknm === '')
        {
            window.alert('닉네임을 입력해주세요 ');
            return;
        }
        else if(pwd !== pwd_confirm)
        {
            window.alert('패스워드, 패스워드 확인의 값이 달라요!');
            return;
        }
        dispatch(userActions.signupFB(id,pwd,nicknm))
    }

    return (
        <User_registration_design>
        <div className="Back_area"> 
            <div className="Signup_area">
                <div className="title_area"> 
                    <h1>회원가입</h1>
                </div>
                <div className="id_area"> 
                <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '60ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField id="outlined-basic" label="아이디" variant="outlined" onChange={(e) => {setId(e.target.value);}} />
                    </Box>
                </div>
                <div className="nick_area"> 
                <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '60ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField id="outlined-basic" label="닉네임" variant="outlined" onChange={(e) => {setNicknm(e.target.value)}} />
                    </Box>
                </div>
                <div className="Pwd_area"> 
                    <FormControl sx={{ m: 1, width: '60ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">패스워드</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                 type='password'
                                 onChange={(e) => {setPwd(e.target.value)}}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                    >
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                    </FormControl>     
                </div>
                <div className="Pwdconfirm_area"> 
                    <FormControl sx={{ m: 1, width: '60ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">패스워드 확인</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                 type='password'
                                 onChange={(e) => {setPwdconfirm(e.target.value)}}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                    >
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                    </FormControl>             
                </div>
                <div className="Button_area" onClick={Signup_click}>
                    <Button variant="contained" disableElevation sx={{fontSize : 20, width : '47ch', height : 70}}>회원가입</Button>
                </div>
            </div>
        </div>
        </User_registration_design>
    );
}

const User_registration_design = styled.div`
    .Back_area{
        width: 100vw;
        height: 84.5vh;
        padding-top: 60px;
        background-color: #eee;
    }
    .Signup_area{
        margin: auto;
        background-color: #fff;
        width: 600px;
        height: 650px;
        border: 2px solid #F2EFEF;
        border-radius: 20px;
    }
    .title_area{
        margin-top : 50px;
        margin-left: 40px;
    }
    .id_area{
        text-align: center;
    }
    .nick_area{
        margin-top : 10px;
        text-align: center;
    }
    .Pwd_area{
        margin-top : 10px;
        text-align: center;
    }
    .Pwdconfirm_area{
        margin-top : 10px;
        text-align: center;
    }
    .Button_area{
        margin-top : 20px;
        text-align: center;
    }
`;

export default User_Registration;