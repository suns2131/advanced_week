import { red } from '@mui/material/colors';
import ReactModal from 'react-modal'
import styled from 'styled-components';

const Scheducle_save = ({ isopen }) => {
    console.log('sdf : ' + isopen)
    return (           
        <ReactModal isOpen = {isopen} style = {{overlay : {backgroundColor : red}}}>
            <Scheducle_save_design>
            <div>
                모달입니다.
            </div>
            </Scheducle_save_design>
        </ReactModal>
    );
}

const Scheducle_save_design = styled.div`
    z-index: 2000;
    width: 500px;
    height: 500px;
    background-color: red;
`;

export default Scheducle_save;