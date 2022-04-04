import React from "react";
import styleds from "styled-components";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Post_registration = () => {
    const Input = styled('input')({
        display: 'none',
      });

    return (
        <Post_regi_design>
        <div className="Back_area"> 
            <div className="Post_area">
                <div className="title_area"> 
                    <h1>게시글 등록</h1>
                </div>
                <div className="img_location_area"> 
                    <div className="location_area">
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '50ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-read-only-input"
                                label="이미지 경로"
                                defaultValue=" "
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            
                        </Box>
                    </div>
                    <div className="file_area">
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <label htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                <Button variant="contained" component="span" sx ={{fontSize : 20}}>
                                Upload
                                </Button>
                            </label>
                        </Stack>
                    </div>
                </div>
                <div className="img_priview_area"> 
                    <h1>미리보기</h1>
                    <div className="imgs"><img className="priviews" src="https://photo.jtbc.joins.com/news/jam_photo/202204/01/6f7c5584-92d5-4b32-99e6-ef89e878b73d.jpg"/></div>
                    
                    
                </div>
                <div className="post_area"> 
                    <h1>게시글 작성</h1>
                    <div className="texts">
                        <TextField
                            id="outlined-multiline-static"
                            label="게시글 작성"
                            multiline
                            rows={10}
                            defaultValue="Default Value"
                            sx={{fontSize : 20, width : '50ch', height : 70}}
                        />
                    </div>
                </div>
                <div className="Button_area">
                    <Button variant="contained" disableElevation sx={{fontSize : 20, width : '47ch', height : 70}}>게시글 등록</Button>
                </div>
            </div>
        </div>
        </Post_regi_design>
    );
}

const Post_regi_design = styleds.div`
    .Back_area{
        width: 100vw;
        height: 120vh;
        padding-top: 30px;
        background-color: #eee;
    }
    .Post_area{
        margin: auto;
        background-color: #fff;
        width: 600px;
        height: 1150px;
        border: 2px solid #F2EFEF;
        border-radius: 20px;
    }
    .title_area{
        margin-left : 20px;
    }
    .img_location_area{
        display :flex;
    }
    .location_area{
        width : 75%;
    }
    .file_area{
        width : 25%;
        display : flex;
        text-align: center;
        align-items : cneter;
    }
    
    .img_priview_area > h1{
        margin-left :20px;
    }

    .imgs{
        width : 600px;
        height : 400px;
        text-align: center;
    }
    .priviews{
        object-fit: contain;
        width : 400px;
        height : 400px;
    }
    .post_area{
        height : 350px;
    }
    .post_area > h1{
        margin-left :20px;
    }
    .texts{
        text-align: center;
    }
    .Button_area{
        margin-top : 20px;
        text-align: center;
    }
`;

export default Post_registration;