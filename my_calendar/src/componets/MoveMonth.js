import React from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import {useDispatch} from 'react-redux'
import {updateYM} from '../redux/modules/ym_state'

const MoveMonth = (props) => {
    const props_nm = props.btn_nm;
    const current_date = props.cur_date;
    const dispatch = useDispatch();

    const cilck_event = () => {
        const pass_data = props;
        console.log(pass_data);
        dispatch(updateYM(pass_data));
    }


    if(props_nm === 'Prev')
    {
        return (
            <Stack direction="row" spacing={1}>
                <IconButton aria-label="ArrowBackIos" onClick={() => {cilck_event()}}>
                    <ArrowBackIos />
                </IconButton>
            </Stack>
        );
    }
    else if(props_nm === "Next")
    {
        return (
            <Stack direction="row" spacing={1}>
                <IconButton aria-label="ArrowForwardIos" onClick={() => {cilck_event()}}>
                    <ArrowForwardIos />
                </IconButton>
            </Stack>
        );
    }
}

export default MoveMonth;