
import styles from '../registration/registration.module.css'; 
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Registration = () => {

  const navigate = useNavigate();

  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmpass, setconfirmpass] = useState("")
  const [errors, setErrors] = useState({})
  
  const validateForm = () => {
    const newErrors = {}; 
  
    if (firstname.length<0) {
      newErrors.firstname = "First name is required";
    }
  
    if (!lastname.trim()) {
      newErrors.lastname = "Last name is required";
    }
  
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }
  
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
  
    if (password !== confirmpass) {
      newErrors.confirmPass = "Passwords do not match";
    }
  
    setErrors(newErrors); 
  
    return Object.keys(newErrors).length === 0; 
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm()
    navigate("/")
  };
  



    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form} >
        <p className={styles.title}>Register</p>
        <p className={styles.message}>Signup now and get full access to our app.</p>
        <div className={styles.flex}>
          <label>
            <input
              required
              value={firstname}
              onChange={(e)=>setfirstname(e.target.value)}
              type="text"
              className={styles.input}
              name="firstname"
              
            />
            <span>Firstname</span>
          </label>
          {errors.firstname && <p className="error">{errors.firstname}</p>}
          <label>
            <input
              required
             value={lastname}
             onChange={(e)=>setlastname(e.target.value)}
              type="text"
              className={styles.input}
              name="lastname"
              
            />
            <span>Lastname</span>
            {errors.lastname && <p className={styles.error}>{errors.lastname}</p>}
          </label>
        </div>

        <label>
          <input
            required
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            type="email"
            className={styles.input}
            name="email"
          />
          <span>Email</span>
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </label>

        <label>
          <input
            required
           value={password}
           onChange={(e)=>setpassword(e.target.value)}
            type="password"
            className={styles.input}
            name="password"
            
          />
          <span>Password</span>
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </label>

        <label>
          <input
            required
           value={confirmpass}
           onChange={(e)=>setconfirmpass(e.target.value)}
            type="password"
            className={styles.input}
            name="confirmPassword"
            
          />
          <span>Confirm password</span>
          {errors.confirmPass && <p className={styles.error}>{errors.confirmPass}</p>}
        </label>

        <button className={styles.submit} type="submit">
          Submit
        </button>
        <p className={styles.signin}>
          Already have an account? <a href="/signin">Signin</a>
        </p>
      </form>
      </div>
      
    );
  }


export default Registration;




