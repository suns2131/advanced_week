import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { setCookie, getCookie, delCookie } from "../../shared/Cookie";

import { auth } from "../../shared/firebase";
import { createUserWithEmailAndPassword, updateProfile, setPersistence, browserSessionPersistence,signInWithEmailAndPassword, signOut } from "firebase/auth"

// actions
const LOG_IN = "LOG_IN"
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const logIn = createAction(LOG_IN, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

const user_inital = {
    user_id : 'seonsik',
    user_nicknm : '',
    user_pwd : '',
}

// middleware actions
const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    console.log(history);
    dispatch(setUser(user));
    history.push("/");
  };
};

const logoutAction = (user) => {
  return function (dispatch, getState, { history }) {
    console.log(history);
    dispatch(logOut(user));
    history.push("/Login");
  };
};

const loginFB = (id,pwd) => {
  return function (dispatch,getState,{history}){
    setPersistence(auth, browserSessionPersistence)
    .then((user) => {
      return signInWithEmailAndPassword(auth,id,pwd)
      .then((user) => {
        console.log(user.user.displayName);
        dispatch(setUser({user_name : user.user.displayName, id: id, user_profile : ''}))
        history.push("/");
      }).catch((error) => {
        console.log(error)
      });
    }).catch((error)=>{

    });
    
  }
}

const signupFB = (id, pwd, nicknm) => {
  return function (dispatch, getState, {history}){

    createUserWithEmailAndPassword(auth,id, pwd)
      .then((user) => {

        // console.log(user);
        
        
        // updateProfile(auth.currentUser, {
        //   displayName : nicknm,
        // }).then(() => {
        //   dispatch(setUser({nick_nm : nicknm, id: id, user_profile : ''}))
        //   history.push('/');
        // }).catch((error)=>{
        //   console.log(error)
        // });

        // auth.currentUser.updateProfile({
        //   displayName: user_name,
        // }).then(()=>{
        //   dispatch(setUser({user_name: user_name, id: id, user_profile: ''}));
        //   history.push('/');
        // }).catch((error) => {
        //   console.log(error);
        // });

        // Signed in
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
        // ..
      });

  }
}

const loginCheckFB = () => {
  return function (dispatch,getState,{history}){
    auth.onAuthStateChanged((user) => {
      if(user){
        dispatch(setUser({
          user_name : user.displayName,
          user_profile : '',
          id : user.email,
        }))
      }
      else {
        dispatch(logOut());
      }
    })
  }
}

const logoutFB = () => {
  return function (dispatch,getState,{history}){
    signOut(auth).then(() => {
      dispatch(logOut());
      history.replace('/');
    })
  }
    
}

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        delCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  logOut,
  getUser,
  logIn,
  loginAction,
  logoutAction,
  signupFB,
  loginFB,
  loginCheckFB,
  logoutFB,
};

export { actionCreators };