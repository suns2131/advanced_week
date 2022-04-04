import React from "react";
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

const User_login = () => {
    return (
        <Login_content_design>
        <div className="Back_area"> 
            <div className="Signup_area">
                <div className="title_area"> 
                    <h1>로그인</h1>
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
                        <TextField id="outlined-basic" label="아이디" variant="outlined" />
                    </Box>
                </div>
                <div className="Pwd_area"> 
                    <TextField
                         sx={{
                            '& > :not(style)': { m: 1, width: '60ch' },
                        }}
                        id="outlined-password-input"
                        label="패스워드"
                        type="password"
                        autoComplete="current-password"
                    />
                </div>
                <div className="Button_area">
                    <Button variant="contained" disableElevation sx={{fontSize : 20, width : '47ch', height : 50}}>회원가입</Button>
                </div>
            </div>
        </div>
        </Login_content_design>
    );
}

const Login_content_design = styled.div`
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
        height: 50vh;
        border: 2px solid #F2EFEF;
        border-radius: 20px;
    }
    .title_area{
        margin-top : 50px;
        margin-left: 20px;
    }
    .id_area{
        margin-top : 20px;
        margin-left: 20px;
    }
    .Pwd_area{
        margin-top : 20px;
        margin-left: 20px;
    }
    .Button_area{
        margin-top : 50px;
        margin-left: 20px;
        padding-left :10px;
    }

`;

export default User_login;