import React, { useRef, useState } from "react";
import styleds from "styled-components";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useDispatch ,useSelector} from "react-redux";
import { actionCreators as postActions} from '../redux/modules/set_post'
import { useHistory } from "react-router-dom";
import { Grid } from "@mui/material";

const Post_registration = (props) => {
    console.log(props)
    const history = useHistory();
    const locations = useRef(null);
    const dispatch = useDispatch();
    const contents = useRef(null);
    
    const [loc, setlocs] = useState('');
    const [imgsrc, setsrc] = useState(null);
    const [str, setstrs] = useState('');
    const [layout, setlayout] = useState('left');
    const Input = styled('input')({
        display: 'none',
      });
    const is_login = useSelector((state) => state.user.is_login)
    if(!is_login){
        return (
            <Grid>
                <p>로그인 후에만 글을 쓸수 있어요.</p>
                <Button onClick={() => {
                    history.replace('/Login')
                }}>로그인하러가기</Button>
            </Grid>
        )        
    }
   
    
    const btn_click = () => {
        window.alert('게시글 등록!')

        console.log(loc);
        console.log(str);
        console.log(layout);
        console.log(imgsrc);

        dispatch(postActions.addpostFB(imgsrc,str,layout))
    }

    const img_select = (e) =>{
        setlocs(e.target.files[0].name);

        const reader = new FileReader();
        const file = e.target.files[0];

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            console.log(reader.result);
            setsrc(reader.result);
        }

    }

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
                            autoComplete="off">
                            <TextField 
                                ref={locations}
                                id="outlined-read-only-input"
                                label="이미지 경로"
                                value={loc}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Box>
                    </div>
                    <div className="file_area">
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <label htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" multiple type="file" 
                                onChange={img_select}/>
                                <Button variant="contained" component="span" sx ={{fontSize : 20}} >
                                Upload
                                </Button>
                            </label>
                        </Stack>
                    </div>
                </div>
                <div className="img_priview_area"> 
                    <h1>미리보기</h1>
                    <div className="imgs"><img className="priviews" src={imgsrc}/></div>
                    
                    
                </div>
                <div className="post_area"> 
                    <div className="post_layout">
                        <div>
                            <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">게시글 레이아웃</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                defaultValue="left"
                                name="row-radio-buttons-group"
                                onChange={(e) => {setlayout(e.target.value)}}
                            >
                                <FormControlLabel value="left" control={<Radio />}  label="좌측" />
                                <FormControlLabel value="right" control={<Radio />} label="우측" />
                                <FormControlLabel value="center" control={<Radio />} label="중앙" />
                            </RadioGroup>
                            </FormControl>    
                        </div>               
                    </div>
                    <div className="texts">
                        <TextField
                            ref={contents}
                            id="outlined-multiline-static"
                            label="게시글 작성"
                            multiline
                            value = {str}
                            rows={10}
                            sx={{fontSize : 20, width : '50ch', height : 70}}
                            onChange = {(e) => {setstrs(e.target.value)}}
                        />
                    </div>
                </div>
                <div className="Button_area" onClick={btn_click}>
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
    .post_layout{
        margin-left :20px;
        margin-bottom : 20px;
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