import { useEffect, useState } from 'react';
import { auth, provider } from "./firebaseConfig";
import { signInWithPopup } from 'firebase/auth';
import Home from "./pages/Home";
import stop from "./component/Images/stop.png";
import Reject from "./component/Images/reject1.png";
import Footer from './component/Footer';
function SignIn() {
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email); // Fixed typo here
    });
  }

  useEffect(() => {
    setValue(localStorage.getItem('email')); // Fixed typo and added '()' to getItem
  }, []); // Added empty dependency array to run the effect only once

  return (
    <>
    <div className='Sa'>
      <div className='main_containner_signup'>
       
       <div className='Sam'>
        {value ? <Home /> : <button onClick={handleClick}><h2>Sign in </h2></button>}
        </div>
         </div>
      <div className='EAM'>   <img src={stop} ></img></div>
     
      </div>
  

    </>
  );
}

export default SignIn;
