import  { Component } from 'react';
import styles from '../registration/registration.module.css'; // Import your CSS module

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // You can access form values in this.state
    console.log('Form submitted with state:', this.state);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
        <p className={styles.title}>Register</p>
        <p className={styles.message}>Signup now and get full access to our app.</p>
        <div className={styles.flex}>
          <label>
            <input
              required
              
              type="text"
              className={styles.input}
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
            />
            <span>Firstname</span>
          </label>

          <label>
            <input
              required
             
              type="text"
              className={styles.input}
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
            />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input
            required
            
            type="email"
            className={styles.input}
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            required
           
            type="password"
            className={styles.input}
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <span>Password</span>
        </label>

        <label>
          <input
            required
           
            type="password"
            className={styles.input}
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
          <span>Confirm password</span>
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
}

export default RegistrationForm;

