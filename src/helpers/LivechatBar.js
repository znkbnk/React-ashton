import React from "react";
import GoogleSignin from "../images/btn_google_signin_dark_focus_web.png";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import ChatBox from "./ChatBox";

const LivechatBar = () => {
  const [user] = useAuthState(auth);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };
  return (
    <div className='service-container'>
      <div className='service-cards'>
        <h1>LiveChat</h1>
        <div>
          {user ? (
            <div className='chat-container'>
              <button onClick={signOut} className='chat-button' type='button'>
                Sign Out
              </button>
              <ChatBox />
            </div>
          ) : (
            <div className='chat-container'>
              <button className='sign-in' onClick={googleSignIn} type='button'>
                <img src={GoogleSignin} alt='Sign in with Google' />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default LivechatBar;
