import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { collection, addDoc, Firestore,getDocs, doc } from "firebase/firestore";
import "moment";
import moment from "moment";
import { db } from "../../shared/firebase";
import { async } from "@firebase/util";

// actions
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

// action creators
const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));

// initialState
const initialState = {
    list: [],
}

// 게시글 하나에는 어떤 정보가 있어야 하는 지 하나 만들어둡시다! :)
const initialPost = {
    user_info: {
          id: 0,
      user_name: "mean0",
      user_profile: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
    },
    image_url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
    contents: "고양이네요!",
    comment_cnt: 10,
    insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
  };

//middle wares..
const getPostFB = () => {
    return async function (dispatch,getState,{history}){
        const postdata = getDocs(collection(db,'post'));
        const post_list = [];
        (await postdata).forEach((post) => {
            console.log(post.id,post.data());

            let _post = {
                id : post.id,
                ...post.data()
            }
            
            post_list.push(_post);
        })
        console.log(post_list);
        dispatch(setPost(post_list));
    }
}


const addpostFB = (image_src, content, layout) => {
    return async function (dispatch,getState,{history}){
        const _user = getState().user.user;
        const user_info = {
            user_name :_user.user_name,
        }
        const post = {
            insert_dt : moment().format("YYYY-MM-DD hh:mm:ss"),
            image_src : image_src,
            content : content,
            content_layout : layout,
        }
        
        const docRef = await addDoc(collection(db, "post"),{
            ...user_info,...post
        });
        
        console.log("Document written with ID: ", docRef.id)
        history.push("/");
    }
}

// reducer
export default handleActions(
    {
      [SET_POST]: (state, action) =>
        produce(state, (draft) => {
          draft.list = action.payload.post_list;
        }),

       [ADD_POST]: (state, action) => 
        produce(state, (draft) => {
          
        })
    },
    initialState
  );
  
  // action creator export
  const actionCreators = {
    addpostFB,
    getPostFB,
  };
  
  export { actionCreators };
