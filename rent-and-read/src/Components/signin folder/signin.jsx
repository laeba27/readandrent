import styles from '../signin folder/signin.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Signin = () => {
    const Navigate = useNavigate();
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const HandleSignIn=()=>{
       if (username.length>0 && password.length>0){
        Navigate("/", { state: { username: username } })
       }
    }

  return (
    <div className={styles.container}>
       <form className={styles.form}>
      <p className={styles.formtitle}>Sign in to your account</p>
      <div className={styles.inputcontainer}>
        <input value={username} onChange={(e)=>setusername(e.target.value)} type="email" placeholder="Enter email" />
        <span></span>
      </div>
      <div className={styles.inputcontainer}>
        <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Enter password" />
      </div>
      <button onClick={HandleSignIn} type="submit" className={styles.submit}>
        Sign in
      </button>
      <p className={styles.signuplink}>
        No account? <Link to="/registrationform"> Sign up</Link>
      </p>
    </form>
    </div>
  );
};

export default Signin;